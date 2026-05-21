import { useRef, useState, useCallback } from 'react';
import type { MouseEvent, RefObject } from 'react';
import type { TextBox, SnapLine } from '../types';
import { getBoundingBox } from '../utils/canvasRenderer';
import { calculateSnap } from '../utils/snapGuide';

interface Params {
  textBoxes: TextBox[];
  canvasRef: RefObject<HTMLCanvasElement>;
  canvasWidth: number;
  canvasHeight: number;
  onSelect: (id: string | null) => void;
  onMove: (id: string, x: number, y: number) => void;
}

interface DragInfo {
  id: string;
  offsetX: number;
  offsetY: number;
}

export function useDrag({ textBoxes, canvasRef, canvasWidth, canvasHeight, onSelect, onMove }: Params) {
  const dragRef = useRef<DragInfo | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [snapLines, setSnapLines] = useState<SnapLine[]>([]);

  // Keep latest textBoxes accessible without re-creating handlers
  const textBoxesRef = useRef(textBoxes);
  textBoxesRef.current = textBoxes;

  const rafIdRef = useRef<number | null>(null);
  const pendingCoordsRef = useRef<{ x: number; y: number } | null>(null);

  const toCanvasCoords = useCallback(
    (e: MouseEvent<HTMLCanvasElement>): { x: number; y: number } => {
      const canvas = e.currentTarget;
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
      };
    },
    [],
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLCanvasElement>) => {
      const { x, y } = toCanvasCoords(e);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      const boxes = textBoxesRef.current;

      // Hit-test in reverse order (topmost first)
      let hit: TextBox | null = null;
      for (let i = boxes.length - 1; i >= 0; i--) {
        const bb = getBoundingBox(ctx, boxes[i]);
        if (x >= bb.x && x <= bb.x + bb.width && y >= bb.y && y <= bb.y + bb.height) {
          hit = boxes[i];
          break;
        }
      }

      if (hit) {
        onSelect(hit.id);
        dragRef.current = { id: hit.id, offsetX: x - hit.x, offsetY: y - hit.y };
        setIsDragging(true);
      } else {
        onSelect(null);
      }
    },
    [toCanvasCoords, canvasRef, onSelect],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLCanvasElement>) => {
      if (!dragRef.current) return;

      // 座標を即座に取り出してrefに保存（高頻度イベントのデータ保持）
      pendingCoordsRef.current = toCanvasCoords(e);
      if (rafIdRef.current !== null) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const coords = pendingCoordsRef.current;
        const drag = dragRef.current;
        if (!coords || !drag) return;

        const rawX = coords.x - drag.offsetX;
        const rawY = coords.y - drag.offsetY;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const draggingBox = textBoxesRef.current.find(b => b.id === drag.id);
        if (!draggingBox) return;

        const tempBox: TextBox = { ...draggingBox, x: rawX, y: rawY };
        const snap = calculateSnap(tempBox, textBoxesRef.current, canvasWidth, canvasHeight, b =>
          getBoundingBox(ctx, b),
        );
        setSnapLines(snap.lines);
        onMove(drag.id, snap.x, snap.y);
      });
    },
    [toCanvasCoords, canvasRef, canvasWidth, canvasHeight, onMove],
  );

  const handleMouseUp = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    pendingCoordsRef.current = null;
    dragRef.current = null;
    setIsDragging(false);
    setSnapLines([]);
  }, []);

  return { handleMouseDown, handleMouseMove, handleMouseUp, isDragging, snapLines };
}
