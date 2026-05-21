import { useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import type { TextBox } from '../../types';
import { useCanvas } from '../../hooks/useCanvas';
import { useDrag } from '../../hooks/useDrag';
import { exportToPng } from '../../utils/canvasRenderer';

export const CANVAS_WIDTH = 960;
export const CANVAS_HEIGHT = 540;

interface Props {
  textBoxes: TextBox[];
  selectedId: string | null;
  padding: number;
  onSelect: (id: string | null) => void;
  onMove: (id: string, x: number, y: number) => void;
  downloadRef: MutableRefObject<() => void>;
}

export function CanvasPreview({ textBoxes, selectedId, padding, onSelect, onMove, downloadRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const textBoxesRef = useRef(textBoxes);
  textBoxesRef.current = textBoxes;
  const paddingRef = useRef(padding);
  paddingRef.current = padding;

  const { handleMouseDown, handleMouseMove, handleMouseUp, isDragging, snapLines } = useDrag({
    textBoxes,
    canvasRef,
    canvasWidth: CANVAS_WIDTH,
    canvasHeight: CANVAS_HEIGHT,
    onSelect,
    onMove,
  });

  useCanvas({
    canvasRef,
    textBoxes,
    selectedId,
    snapLines,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    exportPadding: padding,
  });

  useEffect(() => {
    downloadRef.current = () => {
      const url = exportToPng(textBoxesRef.current, paddingRef.current);
      if (!url) return;
      const ts = new Date()
        .toLocaleString('sv-SE', {
          timeZone: 'Asia/Tokyo',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .replace(/[^0-9]/g, '');
      const a = document.createElement('a');
      a.href = url;
      a.download = `thumbnail-text_${ts}.png`;
      a.click();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="canvas-wrapper">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ cursor: isDragging ? 'grabbing' : 'default' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  );
}
