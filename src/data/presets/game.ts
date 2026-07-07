import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const gameCategory = defineCategory('game', 'ゲーム実況', [
  preset({
    name: '実況イエロー', font: 'Rampart One', color: '#ffee00',
    strokes: [{ color: '#000000', width: 10 }, { color: '#ffffff', width: 4 }],
    shadow: { opacity: 0.85, blur: 8, offsetX: 5, offsetY: 5 },
    gradient: { from: '#ffee00', to: '#ff8800' },
  }),
  preset({
    name: '勝利ゴールド', font: 'Reggae One', color: '#ffd700',
    strokes: [{ color: '#4a2c00', width: 7 }, { color: '#fff2b0', width: 2 }],
    shadow: { opacity: 0.7 },
    gradient: { from: '#ffe27a', to: '#d4900a' },
  }),
  preset({
    name: '敗北ブルー', font: 'Reggae One', color: '#6f9fe8',
    strokes: [{ color: '#0c1c3a', width: 8 }],
    shadow: { opacity: 0.8 },
    gradient: { from: '#9fc5ff', to: '#2b5ca8' },
  }),
  preset({
    name: 'クリティカル', font: 'Rampart One', color: '#ff2d2d', italic: true,
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#1a0000', width: 8 }],
    shadow: { opacity: 0.8, blur: 0, offsetX: 5, offsetY: 5 },
    gradient: { from: '#ff5757', to: '#c00000' },
  }),
  preset({
    name: '8bitシアン', font: 'Press Start 2P', color: '#ffffff', spacing: 0,
    strokes: [{ color: '#00c8ff', width: 5 }],
    shadow: { color: '#005577', opacity: 0.9, blur: 0 },
  }),
  preset({
    name: 'どくどくグリーン', font: 'Rampart One', color: '#8bff4a',
    strokes: [{ color: '#123300', width: 8 }],
    shadow: { color: '#66ff33', opacity: 0.6, blur: 18, offsetX: 0, offsetY: 0 },
    gradient: { from: '#c8ff7a', to: '#3fbf1f' },
  }),
  preset({
    name: 'レジェンド紫金', font: 'Reggae One', color: '#b366ff',
    strokes: [{ color: '#2e0a4a', width: 7 }, { color: '#ffd700', width: 3 }],
    shadow: { opacity: 0.75 },
    gradient: { from: '#e8b3ff', to: '#7a1fbf' },
  }),
  preset({
    name: 'HPレッド', font: 'DotGothic16', color: '#ff4444',
    strokes: [{ color: '#330000', width: 6 }],
    shadow: { opacity: 0.9, blur: 0, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: '経験値ゴールド', font: 'DotGothic16', color: '#ffd700',
    strokes: [{ color: '#3a2a00', width: 6 }],
    shadow: { opacity: 0.9, blur: 0, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: '極太モノクロ', font: 'Black Han Sans', color: '#ffffff',
    strokes: [{ color: '#000000', width: 12 }],
    shadow: { opacity: 0.9, blur: 4, offsetX: 6, offsetY: 6 },
  }),
  preset({
    name: 'サンダー', font: 'Rampart One', color: '#ffd700',
    strokes: [{ color: '#1a1a7a', width: 8 }, { color: '#ffffff', width: 3 }],
    shadow: { opacity: 0.7 },
    gradient: { from: '#fff35c', to: '#ffa500', direction: 'horizontal' },
  }),
  preset({
    name: 'フリーズ', font: 'Orbitron', color: '#bfeaff', bold: true,
    strokes: [{ color: '#0a3d66', width: 6 }],
    shadow: { color: '#66ccff', opacity: 0.8, blur: 16, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ffffff', to: '#7ad4ff' },
  }),
  preset({
    name: 'ラスボス', font: 'Shippori Mincho', color: '#cc0000', bold: true,
    strokes: [{ color: '#000000', width: 9 }],
    shadow: { color: '#ff0000', opacity: 0.6, blur: 20, offsetX: 0, offsetY: 2 },
    gradient: { from: '#ff3333', to: '#660000' },
  }),
  preset({
    name: 'スコア表示', font: 'Press Start 2P', color: '#7cfc00', spacing: 0,
    strokes: [{ color: '#0b2e00', width: 5 }],
    shadow: { opacity: 0.85, blur: 0, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: 'ビクトリーレインボー', font: 'Monomaniac One', color: '#ffd700',
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#1a1a3a', width: 8 }],
    shadow: { opacity: 0.7 },
    gradient: { from: '#ff5f5f', via: '#ffe14d', to: '#5fa8ff', direction: 'horizontal' },
  }),
  preset({
    name: 'サイバーネオン', font: 'Monomaniac One', color: '#00ffd5',
    strokes: [{ color: '#003d33', width: 6 }],
    shadow: { color: '#00ffd5', opacity: 0.8, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ゲームオーバー', font: 'Potta One', color: '#8f9bb0',
    strokes: [{ color: '#10141f', width: 8 }],
    shadow: { opacity: 0.85, blur: 4, offsetX: 4, offsetY: 4 },
  }),
  preset({
    name: 'かいしんの一撃', font: 'Cherry Bomb One', color: '#ffe600', italic: true,
    strokes: [{ color: '#e6003c', width: 6 }, { color: '#1a0000', width: 3 }],
    shadow: { opacity: 0.8, blur: 0, offsetX: 5, offsetY: 5 },
  }),
  preset({
    name: '超レア金', font: 'Potta One', color: '#ffd700',
    strokes: [{ color: '#4a2c00', width: 6 }, { color: '#ffffff', width: 2 }],
    shadow: { opacity: 0.7 },
    gradient: { from: '#fff2b0', via: '#ffd700', to: '#b8860b' },
  }),
  preset({
    name: 'コンボブルー', font: 'Monomaniac One', color: '#ffffff',
    strokes: [{ color: '#0066ff', width: 7 }, { color: '#001a4d', width: 3 }],
    shadow: { opacity: 0.6 },
  }),
  preset({
    name: 'かいふくグリーン', font: 'Potta One', color: '#7dff9e',
    strokes: [{ color: '#0b3d1e', width: 6 }, { color: '#ffffff', width: 2 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: 'ボーナスチャンス', font: 'Cherry Bomb One', color: '#ffd700',
    strokes: [{ color: '#7a1fbf', width: 7 }, { color: '#ffffff', width: 3 }],
    shadow: { opacity: 0.65 },
    gradient: { from: '#ffe97a', to: '#ff9500', direction: 'diagonal' },
  }),
]);
