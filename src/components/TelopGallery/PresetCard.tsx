import { memo, useCallback, useEffect, useRef } from 'react';
import type { TelopPreset } from '../../data/presets/types';
import { ensureFontLoaded } from '../../utils/fontLoader';
import { renderPresetThumbnail } from '../../utils/presetThumbnail';
import { enqueueThumbnailJob } from './thumbnailQueue';

export const THUMB_WIDTH = 220;
export const THUMB_HEIGHT = 96;

interface Props {
  preset: TelopPreset;
  previewText: string;
  applied: boolean;
  onApply: (preset: TelopPreset) => void;
  /** 共有 IntersectionObserver への登録関数。省略時は常に可視として即描画する */
  observe?: (el: Element, onVisibleChange: (visible: boolean) => void) => () => void;
  width?: number;
  height?: number;
}

export const PresetCard = memo(function PresetCard({
  preset,
  previewText,
  applied,
  onApply,
  observe,
  width = THUMB_WIDTH,
  height = THUMB_HEIGHT,
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(!observe);
  const queuedRef = useRef(false);
  const renderedKeyRef = useRef<string | null>(null);
  const latestRef = useRef({ preset, previewText, width, height });
  latestRef.current = { preset, previewText, width, height };

  const requestRender = useCallback(() => {
    const latest = latestRef.current;
    const key = `${latest.preset.id} ${latest.previewText}`;
    if (!visibleRef.current || queuedRef.current || renderedKeyRef.current === key) return;
    queuedRef.current = true;
    enqueueThumbnailJob(() => {
      queuedRef.current = false;
      const canvas = canvasRef.current;
      if (!canvas || !visibleRef.current) return;
      const { preset, previewText, width, height } = latestRef.current;
      const currentKey = `${preset.id} ${previewText}`;
      if (renderedKeyRef.current === currentKey) return;
      // フォールバック字形で描くと差し替え時にちらつくため、ロード完了後に再要求する
      const loading = ensureFontLoaded(preset, previewText);
      if (loading) {
        loading.then(requestRender);
        return;
      }
      renderPresetThumbnail(canvas, preset, previewText, width, height);
      renderedKeyRef.current = currentKey;
    });
  }, []);

  useEffect(() => {
    const el = buttonRef.current;
    if (!observe || !el) return;
    return observe(el, visible => {
      visibleRef.current = visible;
      if (visible) requestRender();
    });
  }, [observe, requestRender]);

  useEffect(() => {
    requestRender();
  }, [preset, previewText, requestRender]);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`telop-card${applied ? ' applied' : ''}`}
      title={`${preset.name}（${preset.fontFamily}）`}
      onClick={() => onApply(preset)}
    >
      <canvas
        ref={canvasRef}
        className="telop-card-canvas"
        width={width}
        height={height}
        style={{ aspectRatio: `${width} / ${height}` }}
        aria-hidden="true"
      />
      <span className="telop-card-name">{preset.name}</span>
    </button>
  );
});
