import { defineCategory, preset } from './helpers';

export const handwritingCategory = defineCategory('hand', '手書き・ナチュラル', [
  preset({
    name: '墨筆', font: 'Klee One', color: '#2a2a2a', bold: true,
    strokes: [{ color: '#ffffff', width: 4 }],
    shadow: { opacity: 0.3, blur: 4, offsetX: 2, offsetY: 2 },
  }),
  preset({
    name: '黒板チョーク', font: 'Yomogi', color: '#f8f8f2', bold: true,
    strokes: [{ color: '#3a5a48', width: 4 }],
    shadow: { opacity: 0.25 },
  }),
  preset({
    name: 'カフェボード', font: 'Klee One', color: '#fff2d9', bold: true,
    strokes: [{ color: '#4a3220', width: 5 }],
    shadow: { opacity: 0.4 },
  }),
  preset({
    name: 'ほっこり', font: 'Zen Maru Gothic', color: '#ff9e5c', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#ffb87a', to: '#f2803d' },
  }),
  preset({
    name: '若葉', font: 'Yomogi', color: '#7ac943', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#9ede6a', to: '#55a626' },
  }),
  preset({
    name: '空色メモ', font: 'Klee One', color: '#5cb3e8',
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.25 },
  }),
  preset({
    name: '蜂蜜', font: 'Zen Maru Gothic', color: '#ffc94d', bold: true,
    strokes: [{ color: '#7a5210', width: 4 }],
    shadow: { opacity: 0.35 },
    gradient: { from: '#ffd97a', to: '#e8a520' },
  }),
  preset({
    name: '桃色マーカー', font: 'Yomogi', color: '#ff85a3', bold: true,
    strokes: [{ color: '#ffffff', width: 4 }],
    shadow: { opacity: 0.25 },
  }),
  preset({
    name: '古紙とインク', font: 'New Tegomin', color: '#33415c', bold: true,
    strokes: [{ color: '#e8e0cc', width: 5 }],
    shadow: { opacity: 0.35 },
  }),
  preset({
    name: 'てがきPOP', font: 'Hachi Maru Pop', color: '#ff6b6b',
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#4a4a4a', width: 2 }],
    shadow: { opacity: 0.4 },
  }),
  preset({
    name: '抹茶ラテ', font: 'Klee One', color: '#7a8c5a', bold: true,
    strokes: [{ color: '#f2ecd9', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#94a874', to: '#5c7040' },
  }),
  preset({
    name: 'らくがき鉛筆', font: 'Yomogi', color: '#4a4a55',
    strokes: [{ color: '#d9d9e0', width: 3 }],
    shadow: { opacity: 0.25 },
  }),
]);
