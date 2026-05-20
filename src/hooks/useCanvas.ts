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
}

export function useCanvas({ canvasRef, textBoxes, selectedId, snapLines, width, height }: Params) {
  const renderRef = useRef<() => void>(() => {});
  renderRef.current = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    renderAll(ctx, textBoxes, selectedId, snapLines, width, height);
  };

  useEffect(() => {
    renderRef.current();
  }, [textBoxes, selectedId, snapLines, width, height]);

  // Re-render after all web fonts finish loading
  useEffect(() => {
    document.fonts.ready.then(() => renderRef.current());
  }, []);
}
