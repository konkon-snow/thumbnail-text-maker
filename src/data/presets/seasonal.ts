import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）

export const seasonalCategory = defineCategory('seasonal', '季節・イベント', [
  preset({
    name: '桜', font: 'Zen Maru Gothic', color: '#ffb8d4', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }, { color: '#d1487f', width: 2 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#ffd9e8', to: '#ff9ec4' },
  }),
  preset({
    name: '新緑', font: 'Rounded Mplus 1c', color: '#7ac943', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.35 },
    gradient: { from: '#a8e063', to: '#56ab2f' },
  }),
  preset({
    name: 'あじさい', font: 'Klee One', color: '#a3a3e8', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#9ab3e8', to: '#b48ad4', direction: 'horizontal' },
  }),
  preset({
    name: '夏空', font: 'M PLUS 1p', color: '#33aaff', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#7ad4ff', to: '#1f8fe8' },
  }),
  preset({
    name: 'ひまわり', font: 'Dela Gothic One', color: '#ffd400',
    strokes: [{ color: '#6e4a00', width: 4 }, { color: '#ffffff', width: 4 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#ffe45c', to: '#ffb700' },
  }),
  preset({
    name: '花火', font: 'Rampart One', color: '#ff8855',
    strokes: [{ color: '#1a1a4d', width: 7 }],
    shadow: { color: '#ffcf5c', opacity: 0.6, blur: 16, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ffcf5c', to: '#ff5c8a', direction: 'horizontal' },
  }),
  preset({
    name: '十五夜', font: 'New Tegomin', color: '#ffe8a3', bold: true,
    strokes: [{ color: '#3a3020', width: 6 }],
    shadow: { color: '#ffd76e', opacity: 0.5, blur: 14, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '紅葉', font: 'Shippori Mincho', color: '#e0662a', bold: true,
    strokes: [{ color: '#4a1a05', width: 5 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#ff8c42', to: '#c1440e' },
  }),
  preset({
    name: 'ハロウィン', font: 'Hachi Maru Pop', color: '#ff8c1a',
    strokes: [{ color: '#3d1466', width: 7 }],
    shadow: { opacity: 0.6, blur: 6 },
  }),
  preset({
    name: 'クリスマス', font: 'Rounded Mplus 1c', color: '#e63946', bold: true,
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#1d6e3a', width: 5 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: '粉雪', font: 'Klee One', color: '#ffffff', bold: true,
    strokes: [{ color: '#a3c8e8', width: 4 }],
    shadow: { color: '#a3c8e8', opacity: 0.6, blur: 16, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '初日の出', font: 'Dela Gothic One', color: '#ffffff',
    strokes: [{ color: '#e60033', width: 6 }, { color: '#ffd700', width: 3 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: 'バレンタイン', font: 'Hachi Maru Pop', color: '#6e4430',
    strokes: [{ color: '#ffd9e8', width: 6 }],
    shadow: { opacity: 0.35 },
    gradient: { from: '#8a5a44', to: '#5c3420' },
  }),
  preset({
    name: '七夕', font: 'Yomogi', color: '#cfe8ff', bold: true,
    strokes: [{ color: '#1a2a5c', width: 6 }],
    shadow: { color: '#ffe27a', opacity: 0.5, blur: 12, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ひなまつり', font: 'Kiwi Maru', color: '#ff9eb8', bold: true,
    strokes: [{ color: '#c2426e', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#ff9ebb', via: '#fffbe8', to: '#8cc963' },
  }),
  preset({
    name: 'こいのぼり', font: 'Kiwi Maru', color: '#4da6ff', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#1a4d80', width: 2 }],
    shadow: { opacity: 0.35 },
  }),
  preset({
    name: '母の日', font: 'Kaisei Decol', color: '#ff6680', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#b32444', width: 2 }],
    shadow: { opacity: 0.3 },
  }),
  preset({
    name: 'かき氷', font: 'Kaisei Decol', color: '#ff9eb8', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#ff8fa3', to: '#5cc8ff', direction: 'horizontal' },
  }),
  preset({
    name: '金木犀', font: 'Zen Old Mincho', color: '#f2a03d', bold: true,
    strokes: [{ color: '#5c3a10', width: 5 }],
    shadow: { color: '#ffb84d', opacity: 0.4, blur: 12, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '成人式', font: 'Zen Old Mincho', color: '#d42a4d', bold: true,
    strokes: [{ color: '#ffd700', width: 4 }, { color: '#4d0a1a', width: 2 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#e8506e', to: '#a3122e', direction: 'diagonal' },
  }),
]);
