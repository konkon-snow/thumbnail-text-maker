type ThumbnailJob = () => void;

const queue: ThumbnailJob[] = [];
let pumping = false;

const FRAME_BUDGET_MS = 8;

function pump(): void {
  const start = performance.now();
  while (queue.length > 0 && performance.now() - start < FRAME_BUDGET_MS) {
    queue.shift()!();
  }
  if (queue.length > 0) {
    requestAnimationFrame(pump);
  } else {
    pumping = false;
  }
}

/**
 * サムネイル描画をフレームあたり約8msに分割して実行するキュー。
 * モーダル初回表示やプレビュー文字変更時に数十枚を一括描画してもロングタスクにしない。
 */
export function enqueueThumbnailJob(job: ThumbnailJob): void {
  queue.push(job);
  if (!pumping) {
    pumping = true;
    requestAnimationFrame(pump);
  }
}
