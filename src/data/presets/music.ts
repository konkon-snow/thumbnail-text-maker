import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const musicCategory = defineCategory('music', '音楽・歌枠', [
  preset({
    name: 'ネオンピンク', font: 'RocknRoll One', color: '#ff6ad5',
    shadow: { color: '#ff2ad4', opacity: 0.9, blur: 30, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ネオン管ブルー', font: 'Monoton', color: '#8ffbff', spacing: 4,
    shadow: { color: '#00e5ff', opacity: 0.9, blur: 34, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '中抜きステージ', font: 'Train One', color: '#ffffff',
    shadow: { color: '#ff2d78', opacity: 0.85, blur: 26, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ステージゴールド', font: 'Anton', color: '#e8b923', spacing: 3,
    strokes: [{ color: '#3d2800', width: 4 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#fff2b0', via: '#e8b923', to: '#9a6a00' },
  }),
  preset({
    name: 'メタルシルバー', font: 'Russo One', color: '#c0c6d4',
    strokes: [{ color: '#23272e', width: 4 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#ffffff', via: '#c0c6d4', to: '#6e7686' },
  }),
  preset({
    name: '夜空バラード', font: 'Zen Old Mincho', color: '#7a8ce8', bold: true,
    strokes: [{ color: '#ffffff', width: 3 }],
    shadow: { color: '#0c1440', opacity: 0.55, blur: 20, offsetX: 0, offsetY: 5 },
    gradient: { from: '#b8c6ff', via: '#7a8ce8', to: '#3a4aa8' },
  }),
  preset({
    name: 'しっとりラベンダー', font: 'Shippori Mincho', color: '#ffffff', bold: true,
    strokes: [{ color: '#8a7ab8', width: 3 }],
    shadow: { color: '#4a3a78', opacity: 0.45, blur: 22, offsetX: 0, offsetY: 4 },
  }),
  preset({
    name: 'ライブレッド', font: 'Dela Gothic One', color: '#ffffff',
    strokes: [{ color: '#ff1744', width: 6 }, { color: '#2a0010', width: 3 }],
    shadow: { color: '#ff1744', opacity: 0.55, blur: 22, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'エモパープル', font: 'RocknRoll One', color: '#8a5cf5',
    strokes: [{ color: '#ffffff', width: 2 }],
    shadow: { color: '#7a3cff', opacity: 0.7, blur: 28, offsetX: 0, offsetY: 0 },
    gradient: { from: '#c58aff', via: '#8a5cf5', to: '#4a2c99' },
  }),
  preset({
    name: 'シティポップ', font: 'Monomaniac One', color: '#b490f0',
    strokes: [{ color: '#2a2a4a', width: 3 }],
    shadow: { opacity: 0.35, blur: 12, offsetX: 3, offsetY: 3 },
    gradient: { from: '#ff8ad0', via: '#b490f0', to: '#6ed8f5', direction: 'horizontal' },
  }),
  preset({
    name: 'サイバーボーカル', font: 'Orbitron', color: '#00d4c0', bold: true,
    strokes: [{ color: '#062830', width: 3 }],
    shadow: { color: '#00d4ff', opacity: 0.75, blur: 26, offsetX: 0, offsetY: 0 },
    gradient: { from: '#7dffd4', to: '#00b3ff', direction: 'diagonal' },
  }),
  preset({
    name: 'アコースティック', font: 'Klee One', color: '#8a5a2e', bold: true,
    strokes: [{ color: '#fff4e0', width: 5 }],
    shadow: { opacity: 0.3, blur: 12, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: 'ロックフェス', font: 'Reggae One', color: '#ffd000',
    strokes: [{ color: '#000000', width: 7 }],
    shadow: { color: '#ff6a00', opacity: 0.6, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'エレクトロデュオ', font: 'Bebas Neue', color: '#00e0c0', spacing: 5,
    strokes: [{ color: '#0a0a14', width: 3 }],
    shadow: { opacity: 0.45, blur: 14, offsetX: 0, offsetY: 4 },
    gradient: { from: '#00ffa3', to: '#dc1fff', direction: 'diagonal' },
  }),
  preset({
    name: 'ホワイトグロー', font: 'Rounded Mplus 1c', color: '#ffffff', bold: true,
    shadow: { color: '#7ad4ff', opacity: 0.8, blur: 30, offsetX: 0, offsetY: 0 },
  }),
]);
