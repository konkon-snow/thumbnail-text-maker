import type { TextBox, SnapLine, SnapResult } from '../types';

const SNAP_THRESHOLD = 8;

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function calculateSnap(
  draggingBox: TextBox,
  allBoxes: TextBox[],
  canvasWidth: number,
  canvasHeight: number,
  getRect: (box: TextBox) => Rect,
): SnapResult {
  const rect = getRect(draggingBox);

  // Candidate snap positions on X axis
  const snapXCandidates: number[] = [0, canvasWidth / 2, canvasWidth];
  // Candidate snap positions on Y axis
  const snapYCandidates: number[] = [0, canvasHeight / 2, canvasHeight];

  for (const box of allBoxes) {
    if (box.id === draggingBox.id) continue;
    const r = getRect(box);
    snapXCandidates.push(r.x, r.x + r.width / 2, r.x + r.width);
    snapYCandidates.push(r.y, r.y + r.height / 2, r.y + r.height);
  }

  const snapLines: SnapLine[] = [];

  // Points on the dragging box that can snap (left edge, center, right edge)
  const boxLeft = rect.x;
  const boxCenterX = rect.x + rect.width / 2;
  const boxRight = rect.x + rect.width;

  let deltaX = 0;
  for (const sx of snapXCandidates) {
    if (Math.abs(boxLeft - sx) < SNAP_THRESHOLD) {
      deltaX = sx - boxLeft;
      snapLines.push({ type: 'vertical', position: sx });
      break;
    }
    if (Math.abs(boxCenterX - sx) < SNAP_THRESHOLD) {
      deltaX = sx - boxCenterX;
      snapLines.push({ type: 'vertical', position: sx });
      break;
    }
    if (Math.abs(boxRight - sx) < SNAP_THRESHOLD) {
      deltaX = sx - boxRight;
      snapLines.push({ type: 'vertical', position: sx });
      break;
    }
  }

  const boxTop = rect.y;
  const boxCenterY = rect.y + rect.height / 2;
  const boxBottom = rect.y + rect.height;

  let deltaY = 0;
  for (const sy of snapYCandidates) {
    if (Math.abs(boxTop - sy) < SNAP_THRESHOLD) {
      deltaY = sy - boxTop;
      snapLines.push({ type: 'horizontal', position: sy });
      break;
    }
    if (Math.abs(boxCenterY - sy) < SNAP_THRESHOLD) {
      deltaY = sy - boxCenterY;
      snapLines.push({ type: 'horizontal', position: sy });
      break;
    }
    if (Math.abs(boxBottom - sy) < SNAP_THRESHOLD) {
      deltaY = sy - boxBottom;
      snapLines.push({ type: 'horizontal', position: sy });
      break;
    }
  }

  return {
    x: draggingBox.x + deltaX,
    y: draggingBox.y + deltaY,
    lines: snapLines,
  };
}
