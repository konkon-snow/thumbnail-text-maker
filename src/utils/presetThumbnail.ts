import type { TextBox } from '../types';
import type { TelopStyle } from '../data/presets/types';
import { drawTextBox, getBoundingBox } from './canvasRenderer';

const BASE_FONT_SIZE = 80;
const FIT_PADDING = 6;
/** 短い文字が過剰に拡大されて隣のカードと大きさが揃わなくなるのを防ぐ */
const MAX_SCALE = 1.25;

let measureCtx: CanvasRenderingContext2D | null = null;

function getMeasureCtx(): CanvasRenderingContext2D {
  if (!measureCtx) {
    measureCtx = document.createElement('canvas').getContext('2d')!;
  }
  return measureCtx;
}

function buildBox(style: TelopStyle, text: string, fontSize: number): TextBox {
  return {
    id: 'preset-thumbnail',
    text,
    x: 0,
    y: 0,
    fontSize,
    lineHeight: 1.1,
    fontFamily: style.fontFamily,
    bold: style.bold,
    italic: style.italic,
    letterSpacing: style.letterSpacing,
    color: style.color,
    strokes: style.strokes,
    shadow: style.shadow,
    gradient: style.gradient,
  };
}

/**
 * fontSize・縁取り幅・字間を scale 倍、シャドウを shadowScale 倍にする。
 * Canvas の shadowBlur / shadowOffset はデバイス空間扱いで CTM の影響を受けないため、
 * dpr のスケールを CTM でかける場合はシャドウのみ dpr を掛けた値を渡す必要がある。
 */
function scaleBox(box: TextBox, scale: number, shadowScale: number): TextBox {
  return {
    ...box,
    fontSize: Math.max(6, box.fontSize * scale),
    letterSpacing: box.letterSpacing * scale,
    strokes: box.strokes.map(s =>
      s.enabled ? { ...s, width: Math.max(0.5, s.width * scale) } : { ...s },
    ) as TextBox['strokes'],
    shadow: {
      ...box.shadow,
      blur: box.shadow.blur * shadowScale,
      offsetX: box.shadow.offsetX * shadowScale,
      offsetY: box.shadow.offsetY * shadowScale,
    },
  };
}

/** プリセットのスタイルを width×height（CSS px）のカード canvas に収めて描画する */
export function renderPresetThumbnail(
  canvas: HTMLCanvasElement,
  style: TelopStyle,
  text: string,
  width: number,
  height: number,
): void {
  const mctx = getMeasureCtx();
  const base = buildBox(style, text, BASE_FONT_SIZE);
  const bb = getBoundingBox(mctx, base);

  // getBoundingBox はシャドウを含まないため、にじみ・オフセット分を収まり判定に加える
  const shadowExtent = style.shadow.enabled
    ? style.shadow.blur + Math.max(Math.abs(style.shadow.offsetX), Math.abs(style.shadow.offsetY))
    : 0;
  const fitWidth = bb.width + shadowExtent * 2;
  const fitHeight = bb.height + shadowExtent * 2;
  const scale = Math.min(
    (width - FIT_PADDING * 2) / fitWidth,
    (height - FIT_PADDING * 2) / fitHeight,
    MAX_SCALE,
  );

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const scaled = scaleBox(base, scale, scale * dpr);
  const sbb = getBoundingBox(mctx, scaled);
  scaled.x = Math.round((width - sbb.width) / 2 - sbb.x);
  scaled.y = Math.round((height - sbb.height) / 2 - sbb.y);

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawTextBox(ctx, scaled);
}
