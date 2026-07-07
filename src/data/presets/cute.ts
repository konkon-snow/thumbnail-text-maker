import { defineCategory, preset } from './helpers';

export const cuteCategory = defineCategory('cute', 'キュート', [
  preset({
    name: 'ピーチ', font: 'Hachi Maru Pop', color: '#ff9ecb',
    strokes: [{ color: '#ffffff', width: 6 }, { color: '#d1487f', width: 2 }],
    shadow: { color: '#b34f79', opacity: 0.35 },
    gradient: { from: '#ffc2dd', to: '#ff7ab8' },
  }),
  preset({
    name: 'いちごミルク', font: 'Rounded Mplus 1c', color: '#ffffff', bold: true,
    strokes: [{ color: '#ff8ab8', width: 6 }],
    shadow: { color: '#ff8ab8', opacity: 0.5, blur: 10, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: 'ラベンダー', font: 'Zen Maru Gothic', color: '#b89aff', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#d7b8ff', to: '#9a7ae8' },
  }),
  preset({
    name: 'ミントソーダ', font: 'Rounded Mplus 1c', color: '#7fe8c8', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#1f8a68', width: 2 }],
    shadow: { opacity: 0.35 },
    gradient: { from: '#b8ffe8', to: '#5fd4b0' },
  }),
  preset({
    name: 'ベビーブルー', font: 'Hachi Maru Pop', color: '#a8d8ff',
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#4a90d9', width: 2 }],
    shadow: { opacity: 0.3 },
  }),
  preset({
    name: 'レモネード', font: 'Yomogi', color: '#ffdb4d', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#d19a00', width: 2 }],
    shadow: { opacity: 0.3 },
  }),
  preset({
    name: 'さくらんぼ', font: 'Hachi Maru Pop', color: '#ff5c7a',
    strokes: [{ color: '#ffffff', width: 6 }, { color: '#a8203a', width: 2 }],
    shadow: { opacity: 0.35 },
  }),
  preset({
    name: 'パステル虹', font: 'Zen Maru Gothic', color: '#ffb3d9', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.25 },
    gradient: { from: '#ffb3d9', to: '#a3d9ff', direction: 'horizontal' },
  }),
  preset({
    name: 'マシュマロ', font: 'Rounded Mplus 1c', color: '#ffffff', bold: true,
    strokes: [{ color: '#ffc2dd', width: 7 }],
    shadow: { color: '#d98ab0', opacity: 0.4, blur: 12, offsetX: 0, offsetY: 3 },
  }),
  preset({
    name: 'チョコベリー', font: 'Hachi Maru Pop', color: '#a3684a',
    strokes: [{ color: '#ffe8f0', width: 6 }, { color: '#6e3a24', width: 2 }],
    shadow: { opacity: 0.35 },
  }),
  preset({
    name: 'ミルクティー', font: 'Zen Maru Gothic', color: '#d9b48f', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#8a5a30', width: 2 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#e8cdb0', to: '#c9996e' },
  }),
  preset({
    name: 'ゆめかわ', font: 'Hachi Maru Pop', color: '#d8b3ff',
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { color: '#b380ff', opacity: 0.5, blur: 14, offsetX: 0, offsetY: 0 },
    gradient: { from: '#c8a3ff', to: '#ff9ee8', direction: 'horizontal' },
  }),
  preset({
    name: 'あんず', font: 'Yomogi', color: '#ffbf80', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#b35900', width: 2 }],
    shadow: { opacity: 0.3 },
    gradient: { from: '#ffd9a3', to: '#ff9e5c' },
  }),
]);
