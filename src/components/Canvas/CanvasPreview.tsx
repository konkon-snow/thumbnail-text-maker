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
      const url = exportToPng(textBoxes, padding);
      if (!url) return;
      const a = document.createElement('a');
      a.href = url;
      a.download = 'thumbnail-text.png';
      a.click();
    };
  }, [textBoxes, padding]);

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
