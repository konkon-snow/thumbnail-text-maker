import type { TextBox, SnapLine } from '../types';

export const FONT_CATEGORIES = [
  { label: '太字インパクト', fonts: ['Dela Gothic One', 'Black Han Sans'] },
  { label: '定番ゴシック', fonts: ['Noto Sans JP', 'M PLUS 1p'] },
  { label: '丸ゴシック', fonts: ['Zen Maru Gothic', 'Rounded Mplus 1c'] },
  { label: '明朝', fonts: ['Noto Serif JP', 'Shippori Mincho'] },
  { label: '手書き風', fonts: ['Klee One', 'Yomogi'] },
  { label: 'ゲーム日本語', fonts: ['Rampart One', 'Reggae One', 'Hachi Maru Pop'] },
  { label: 'ドット/レトロ', fonts: ['DotGothic16', 'New Tegomin'] },
  { label: '英語', fonts: ['Bebas Neue', 'Oswald', 'Anton', 'Orbitron', 'Russo One', 'Press Start 2P'] },
] as const;

type Ctx = CanvasRenderingContext2D;

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${opacity})`;
}

function buildFontString(box: TextBox): string {
  const style = box.italic ? 'italic ' : '';
  const weight = box.bold ? 'bold ' : '';
  return `${style}${weight}${box.fontSize}px "${box.fontFamily}"`;
}

function setCtxFont(ctx: Ctx, box: TextBox): void {
  ctx.font = buildFontString(box);
  (ctx as Ctx & { letterSpacing: string }).letterSpacing = `${box.letterSpacing}px`;
}

function measureLines(ctx: Ctx, box: TextBox): { lines: string[]; maxWidth: number; lineHeightPx: number } {
  setCtxFont(ctx, box);
  const lines = box.text.split('\n');
  let maxWidth = 0;
  for (const line of lines) {
    maxWidth = Math.max(maxWidth, ctx.measureText(line).width);
  }
  return { lines, maxWidth, lineHeightPx: box.fontSize * box.lineHeight };
}

export function getBoundingBox(
  ctx: Ctx,
  box: TextBox
): { x: number; y: number; width: number; height: number } {
  const { lines, maxWidth, lineHeightPx } = measureLines(ctx, box);
  const totalStrokeWidth = box.strokes.reduce((acc, s) => (s.enabled ? acc + s.width : acc), 0);
  return {
    x: box.x - totalStrokeWidth,
    y: box.y - totalStrokeWidth,
    width: maxWidth + totalStrokeWidth * 2,
    height: lines.length * lineHeightPx + totalStrokeWidth * 2,
  };
}

export function getCenteredPosition(
  box: TextBox,
  canvasWidth: number,
  canvasHeight: number,
): { x: number; y: number } {
  const offscreen = document.createElement('canvas');
  const ctx = offscreen.getContext('2d')!;
  const { lines, maxWidth, lineHeightPx } = measureLines(ctx, box);
  const totalHeight = lines.length * lineHeightPx;
  const totalStroke = box.strokes.reduce((acc, s) => (s.enabled ? acc + s.width : acc), 0);
  return {
    x: Math.round((canvasWidth - maxWidth) / 2 - totalStroke),
    y: Math.round((canvasHeight - totalHeight) / 2 - totalStroke),
  };
}

export type AlignH = 'left' | 'center' | 'right';
export type AlignV = 'top' | 'middle' | 'bottom';

export function getAlignedPosition(
  box: TextBox,
  canvasWidth: number,
  canvasHeight: number,
  alignH: AlignH | null,
  alignV: AlignV | null,
): { x: number; y: number } {
  const offscreen = document.createElement('canvas');
  const ctx = offscreen.getContext('2d')!;
  const { lines, maxWidth, lineHeightPx } = measureLines(ctx, box);
  const totalHeight = lines.length * lineHeightPx;
  const totalStroke = box.strokes.reduce((acc, s) => (s.enabled ? acc + s.width : acc), 0);

  let x = box.x;
  let y = box.y;

  if (alignH === 'left')   x = totalStroke;
  if (alignH === 'center') x = Math.round((canvasWidth - maxWidth) / 2 - totalStroke);
  if (alignH === 'right')  x = Math.round(canvasWidth - maxWidth - totalStroke);

  if (alignV === 'top')    y = totalStroke;
  if (alignV === 'middle') y = Math.round((canvasHeight - totalHeight) / 2 - totalStroke);
  if (alignV === 'bottom') y = Math.round(canvasHeight - totalHeight - totalStroke);

  return { x, y };
}

export function drawTextBox(ctx: Ctx, box: TextBox, options: { selected?: boolean } = {}): void {
  ctx.save();
  ctx.textBaseline = 'top';
  setCtxFont(ctx, box);

  const { lines, maxWidth, lineHeightPx } = measureLines(ctx, box);

  // Strokes: draw outermost first (index 2 → 0)
  let shadowApplied = false;
  for (let i = 2; i >= 0; i--) {
    const stroke = box.strokes[i];
    if (!stroke.enabled || stroke.width <= 0) continue;

    // Shadow only on the outermost drawn stroke
    if (!shadowApplied && box.shadow.enabled) {
      ctx.shadowColor = hexToRgba(box.shadow.color, box.shadow.opacity);
      ctx.shadowBlur = box.shadow.blur;
      ctx.shadowOffsetX = box.shadow.offsetX;
      ctx.shadowOffsetY = box.shadow.offsetY;
      shadowApplied = true;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }

    // Cumulative stroke width: sum of enabled widths from 0 to i
    let cumWidth = 0;
    for (let j = 0; j <= i; j++) {
      if (box.strokes[j].enabled) cumWidth += box.strokes[j].width;
    }

    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = cumWidth * 2;
    ctx.lineJoin = 'round';

    for (let li = 0; li < lines.length; li++) {
      ctx.strokeText(lines[li], box.x, box.y + li * lineHeightPx);
    }
  }

  // Clear shadow before fill
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Shadow on fill when no strokes were drawn
  if (!shadowApplied && box.shadow.enabled) {
    ctx.shadowColor = hexToRgba(box.shadow.color, box.shadow.opacity);
    ctx.shadowBlur = box.shadow.blur;
    ctx.shadowOffsetX = box.shadow.offsetX;
    ctx.shadowOffsetY = box.shadow.offsetY;
  }

  // Fill: gradient or solid
  if (box.gradient.enabled && box.gradient.stops.length >= 2) {
    const totalHeight = lines.length * lineHeightPx;
    const grad =
      box.gradient.direction === 'horizontal'
        ? ctx.createLinearGradient(box.x, box.y, box.x + maxWidth, box.y)
        : ctx.createLinearGradient(box.x, box.y, box.x, box.y + totalHeight);
    for (const stop of box.gradient.stops) {
      grad.addColorStop(stop.offset, stop.color);
    }
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = box.color;
  }

  for (let li = 0; li < lines.length; li++) {
    ctx.fillText(lines[li], box.x, box.y + li * lineHeightPx);
  }

  // Selection outline
  if (options.selected) {
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    const totalHeight = lines.length * lineHeightPx;
    const pad = 6;
    const totalStroke = box.strokes.reduce((acc, s) => (s.enabled ? acc + s.width : acc), 0);
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 3]);
    ctx.strokeRect(
      box.x - totalStroke - pad,
      box.y - totalStroke - pad,
      maxWidth + (totalStroke + pad) * 2,
      totalHeight + (totalStroke + pad) * 2,
    );
    ctx.setLineDash([]);
  }

  ctx.restore();
}

export function renderAll(
  ctx: Ctx,
  textBoxes: TextBox[],
  selectedId: string | null,
  snapLines: SnapLine[],
  canvasWidth: number,
  canvasHeight: number,
  exportPadding?: number,
): void {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Snap guide lines
  if (snapLines.length > 0) {
    ctx.save();
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (const line of snapLines) {
      ctx.beginPath();
      if (line.type === 'horizontal') {
        ctx.moveTo(0, line.position);
        ctx.lineTo(canvasWidth, line.position);
      } else {
        ctx.moveTo(line.position, 0);
        ctx.lineTo(line.position, canvasHeight);
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();
  }

  for (const box of textBoxes) {
    drawTextBox(ctx, box, { selected: box.id === selectedId });
  }

  // Export bounds guide
  if (exportPadding !== undefined && textBoxes.length > 0) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const box of textBoxes) {
      const bb = getBoundingBox(ctx, box);
      minX = Math.min(minX, bb.x);
      minY = Math.min(minY, bb.y);
      maxX = Math.max(maxX, bb.x + bb.width);
      maxY = Math.max(maxY, bb.y + bb.height);
    }
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 200, 50, 0.6)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(
      minX - exportPadding,
      minY - exportPadding,
      maxX - minX + exportPadding * 2,
      maxY - minY + exportPadding * 2,
    );
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255, 200, 50, 0.7)';
    ctx.font = '11px system-ui, sans-serif';
    ctx.textBaseline = 'bottom';
    ctx.fillText(`書き出し余白 ${exportPadding}px`, minX - exportPadding + 4, minY - exportPadding - 2);
    ctx.restore();
  }
}

export function exportToPng(textBoxes: TextBox[], padding: number): string {
  if (textBoxes.length === 0) return '';

  // measureText is canvas-size independent; default 300x150 is sufficient
  const measureCanvas = document.createElement('canvas');
  const measureCtx = measureCanvas.getContext('2d')!;

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const box of textBoxes) {
    const bb = getBoundingBox(measureCtx, box);
    minX = Math.min(minX, bb.x);
    minY = Math.min(minY, bb.y);
    maxX = Math.max(maxX, bb.x + bb.width);
    maxY = Math.max(maxY, bb.y + bb.height);
  }

  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = Math.ceil(maxX - minX + padding * 2);
  exportCanvas.height = Math.ceil(maxY - minY + padding * 2);
  const exportCtx = exportCanvas.getContext('2d')!;

  exportCtx.translate(padding - minX, padding - minY);
  for (const box of textBoxes) {
    drawTextBox(exportCtx, box);
  }

  return exportCanvas.toDataURL('image/png');
}
