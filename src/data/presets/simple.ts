import { defineCategory, preset } from './helpers';

export const simpleCategory = defineCategory('simple', 'シンプル', [
  preset({
    name: '白・黒フチ', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#000000', width: 6 }],
    shadow: { opacity: 0.5, blur: 6, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: '黒・白フチ', font: 'Noto Sans JP', color: '#1c1c1c', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.35, blur: 6, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: '白・細フチ', font: 'M PLUS 1p', color: '#ffffff', bold: true,
    strokes: [{ color: '#333333', width: 3 }],
    shadow: { opacity: 0.3, blur: 4, offsetX: 2, offsetY: 2 },
  }),
  preset({
    name: '白・影のみ', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    shadow: { opacity: 0.55, blur: 10, offsetX: 4, offsetY: 4 },
  }),
  preset({
    name: 'クリーム', font: 'Zen Maru Gothic', color: '#fff6e0', bold: true,
    strokes: [{ color: '#5a3d1e', width: 5 }],
    shadow: { opacity: 0.4 },
  }),
  preset({
    name: '白黒ダブル', font: 'Dela Gothic One', color: '#ffffff',
    strokes: [{ color: '#000000', width: 7 }, { color: '#ffffff', width: 3 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: 'ネイビー・白フチ', font: 'M PLUS 1p', color: '#1e3a6e', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.35 },
  }),
  preset({
    name: '白・ネイビーフチ', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#1e3a6e', width: 6 }],
    shadow: { opacity: 0.4 },
  }),
  preset({
    name: 'グレーミニマル', font: 'Oswald', color: '#e8e8f0', bold: true, spacing: 4,
    strokes: [{ color: '#2a2a3a', width: 4 }],
  }),
  preset({
    name: 'モノトーングラデ', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#000000', width: 5 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#ffffff', to: '#b8b8c8' },
  }),
  preset({
    name: '角ゴ極太', font: 'Black Han Sans', color: '#ffffff',
    strokes: [{ color: '#000000', width: 8 }],
    shadow: { opacity: 0.6, blur: 4 },
  }),
  preset({
    name: 'アイボリー明朝', font: 'New Tegomin', color: '#f2ead8', bold: true,
    strokes: [{ color: '#3a3a3a', width: 4 }],
    shadow: { opacity: 0.4 },
  }),
]);
