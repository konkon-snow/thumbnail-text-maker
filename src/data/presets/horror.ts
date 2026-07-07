import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）

export const horrorCategory = defineCategory('horror', 'ホラー・不穏', [
  preset({
    name: '血文字', font: 'Shippori Mincho', color: '#b30000', bold: true,
    strokes: [{ color: '#000000', width: 6 }],
    shadow: { color: '#cc0000', opacity: 0.6, blur: 14, offsetX: 0, offsetY: 4 },
    gradient: { from: '#ff1a1a', to: '#5c0000' },
  }),
  preset({
    name: '亡霊白', font: 'Noto Serif JP', color: '#d9d9e8', bold: true,
    strokes: [{ color: '#000000', width: 8 }],
    shadow: { color: '#9999ff', opacity: 0.5, blur: 20, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '呪い紫', font: 'Shippori Mincho', color: '#b39ddb',
    strokes: [{ color: '#1a0533', width: 6 }],
    shadow: { color: '#7c4dff', opacity: 0.55, blur: 16, offsetX: 0, offsetY: 0 },
    gradient: { from: '#cbb3ff', to: '#5e35b1' },
  }),
  preset({
    name: '猛毒', font: 'Klee One', color: '#9eff5c', bold: true,
    strokes: [{ color: '#1a3300', width: 5 }],
    shadow: { color: '#66ff00', opacity: 0.5, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ゴースト', font: 'Yomogi', color: '#ffffff',
    shadow: { color: '#ccddff', opacity: 0.7, blur: 24, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '錆と血', font: 'DotGothic16', color: '#c46a3f',
    strokes: [{ color: '#26140a', width: 6 }],
    shadow: { opacity: 0.6 },
    gradient: { from: '#d98a5c', to: '#7a3014' },
  }),
  preset({
    name: '深夜放送', font: 'DotGothic16', color: '#e8e8e8',
    strokes: [{ color: '#111111', width: 5 }],
    shadow: { color: '#ff0000', opacity: 0.5, blur: 0, offsetX: 3, offsetY: 0 },
  }),
  preset({
    name: '黒沼', font: 'Shippori Mincho', color: '#1a1a1a', bold: true,
    strokes: [{ color: '#8a8aa0', width: 3 }],
    shadow: { opacity: 0.8, blur: 16, offsetX: 0, offsetY: 6 },
  }),
  preset({
    name: '戦慄', font: 'Noto Serif JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#3d0000', width: 7 }],
    shadow: { color: '#660000', opacity: 0.8, blur: 12 },
  }),
  preset({
    name: '心霊写真', font: 'Klee One', color: '#cfd8dc',
    strokes: [{ color: '#263238', width: 4 }],
    shadow: { color: '#b0e0ff', opacity: 0.45, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '呪文', font: 'New Tegomin', color: '#d4c5a0', bold: true,
    strokes: [{ color: '#1a0f00', width: 6 }],
    shadow: { opacity: 0.75, blur: 10, offsetX: 3, offsetY: 5 },
  }),
  preset({
    name: '絶叫', font: 'Rampart One', color: '#cc1111',
    strokes: [{ color: '#000000', width: 8 }],
    shadow: { opacity: 0.9, blur: 2, offsetX: 6, offsetY: 6 },
    gradient: { from: '#ff4444', to: '#8a0000' },
  }),
  preset({
    name: '血痕', font: 'Shippori Antique B1', color: '#c41a1a', bold: true,
    strokes: [{ color: '#000000', width: 6 }],
    shadow: { color: '#8a0000', opacity: 0.7, blur: 6, offsetX: 0, offsetY: 8 },
  }),
  preset({
    name: '怪談ろうそく', font: 'Shippori Antique B1', color: '#dce8dc',
    strokes: [{ color: '#0d1a14', width: 7 }],
    shadow: { color: '#66ffcc', opacity: 0.4, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '緊急サイレン', font: 'Russo One', color: '#ffffff', bold: true,
    strokes: [{ color: '#cc0000', width: 5 }, { color: '#1a0000', width: 3 }],
    shadow: { color: '#ff0000', opacity: 0.7, blur: 16, offsetX: 0, offsetY: 0 },
  }),
]);
