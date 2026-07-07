import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const elegantCategory = defineCategory('elegant', 'エレガント・高級', [
  preset({
    name: 'ゴールド', font: 'Noto Serif JP', color: '#ffd700', bold: true,
    strokes: [{ color: '#3d2800', width: 5 }],
    shadow: { color: '#7a4a00', opacity: 0.5, blur: 10, offsetX: 3, offsetY: 3 },
    gradient: { from: '#ffe27a', to: '#c8920a' },
  }),
  preset({
    name: '白金明朝', font: 'Shippori Mincho', color: '#ffffff', bold: true,
    strokes: [{ color: '#c0a060', width: 3 }],
    shadow: { opacity: 0.35, offsetX: 2, offsetY: 2 },
  }),
  preset({
    name: 'シャンパン', font: 'Noto Serif JP', color: '#e8d5a8',
    strokes: [{ color: '#5a4520', width: 4 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#f5e6c8', to: '#cdb27e' },
  }),
  preset({
    name: 'プラチナ', font: 'Bebas Neue', color: '#d8d8e0', spacing: 5,
    strokes: [{ color: '#33333f', width: 4 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#ffffff', to: '#a8a8b8' },
  }),
  preset({
    name: 'ローズゴールド', font: 'Shippori Mincho', color: '#dda090', bold: true,
    strokes: [{ color: '#5c2c20', width: 4 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#f0c0b0', to: '#c87a6a' },
  }),
  preset({
    name: '深緑と金', font: 'Noto Serif JP', color: '#2e6e50', bold: true,
    strokes: [{ color: '#ffd700', width: 2 }, { color: '#0c2418', width: 6 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#2e6e50', to: '#123324' },
  }),
  preset({
    name: 'ボルドー', font: 'Shippori Mincho', color: '#6e1828', bold: true,
    strokes: [{ color: '#e8d5a8', width: 5 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#8e2438', to: '#4a0c18' },
  }),
  preset({
    name: 'モード', font: 'Oswald', color: '#ffffff', bold: true, spacing: 8,
    strokes: [{ color: '#000000', width: 3 }],
    shadow: { opacity: 0.3, blur: 6, offsetX: 2, offsetY: 2 },
  }),
  preset({
    name: 'アンティーク', font: 'New Tegomin', color: '#e8dcc0', bold: true,
    strokes: [{ color: '#4a3a20', width: 5 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: '夜会', font: 'Bebas Neue', color: '#9a80e8', spacing: 4,
    strokes: [{ color: '#241448', width: 4 }],
    shadow: { color: '#4a2c99', opacity: 0.5, blur: 12, offsetX: 0, offsetY: 3 },
    gradient: { from: '#c8b3ff', to: '#6e50c8' },
  }),
  preset({
    name: '純白', font: 'Noto Serif JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#d8d8e0', width: 2 }],
    shadow: { color: '#8888aa', opacity: 0.4, blur: 14, offsetX: 0, offsetY: 4 },
  }),
  preset({
    name: '墨と金', font: 'Shippori Mincho', color: '#1c1c1c', bold: true,
    strokes: [{ color: '#ffd700', width: 3 }],
    shadow: { opacity: 0.55 },
    gradient: { from: '#3a3a3a', to: '#0c0c0c' },
  }),
  preset({
    name: '金蒔絵', font: 'Zen Old Mincho', color: '#e8b923', bold: true,
    strokes: [{ color: '#3a2a00', width: 4 }],
    shadow: { color: '#5a4200', opacity: 0.5, blur: 8, offsetX: 2, offsetY: 3 },
    gradient: { from: '#fff1b8', via: '#e8b923', to: '#9a6a00' },
  }),
  preset({
    name: '銀細工', font: 'Shippori Antique B1', color: '#c8ccd8',
    strokes: [{ color: '#22242e', width: 4 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#ffffff', via: '#c8ccd8', to: '#787e90' },
  }),
  preset({
    name: '薔薇金', font: 'Zen Old Mincho', color: '#e8a090', bold: true,
    strokes: [{ color: '#4a201a', width: 4 }],
    shadow: { opacity: 0.4, offsetX: 2, offsetY: 3 },
    gradient: { from: '#ffe0d5', via: '#e8a090', to: '#a05545' },
  }),
  preset({
    name: '漆黒金箔', font: 'Shippori Antique B1', color: '#12100c',
    strokes: [{ color: '#d4af37', width: 3 }, { color: '#000000', width: 6 }],
    shadow: { opacity: 0.5, blur: 10, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: 'ボルドーシャンパン', font: 'Zen Old Mincho', color: '#f0e0b8', bold: true,
    strokes: [{ color: '#5a0f1e', width: 5 }, { color: '#2a060c', width: 2 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#f8ecc8', to: '#d8b878' },
  }),
]);
