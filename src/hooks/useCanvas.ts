import { useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import type { TextBox, SnapLine } from '../types';
import { renderAll } from '../utils/canvasRenderer';

interface Params {
  canvasRef: RefObject<HTMLCanvasElement>;
  textBoxes: TextBox[];
  selectedId: string | null;
  snapLines: SnapLine[];
  width: number;
  height: number;
  exportPadding?: number;
}

export function useCanvas({ canvasRef, textBoxes, selectedId, snapLines, width, height, exportPadding }: Params) {
  const renderRef = useRef<() => void>(() => {});
  renderRef.current = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    renderAll(ctx, textBoxes, selectedId, snapLines, width, height, exportPadding);
  };

  useEffect(() => {
    renderRef.current();
  }, [textBoxes, selectedId, snapLines, width, height, exportPadding]);

  // Re-render after web fonts load (initial + dynamic font additions)
  useEffect(() => {
    let mounted = true;
    const rerender = () => {
      if (mounted) renderRef.current();
    };
    document.fonts.ready.then(rerender);
    document.fonts.addEventListener('loadingdone', rerender);
    return () => {
      mounted = false;
      document.fonts.removeEventListener('loadingdone', rerender);
    };
  }, []);
}
