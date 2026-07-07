import { defineCategory, preset } from './helpers';

export const newsCategory = defineCategory('news', 'ニュース・速報', [
  preset({
    name: '速報レッド', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#e60012', width: 8 }],
    shadow: { opacity: 0.7, blur: 0 },
  }),
  preset({
    name: 'ニュース紺', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#003366', width: 7 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: '注意喚起', font: 'M PLUS 1p', color: '#ffdd00', bold: true,
    strokes: [{ color: '#000000', width: 8 }],
    shadow: { opacity: 0.8, blur: 0 },
  }),
  preset({
    name: '号外', font: 'Shippori Mincho', color: '#1a1a1a', bold: true,
    strokes: [{ color: '#ffffff', width: 6 }, { color: '#1a1a1a', width: 2 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: '緊急アラート', font: 'Black Han Sans', color: '#ff2222',
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#660000', width: 2 }],
    shadow: { opacity: 0.6 },
    gradient: { from: '#ff5555', to: '#cc0000' },
  }),
  preset({
    name: '情報番組', font: 'M PLUS 1p', color: '#ffffff', bold: true,
    strokes: [{ color: '#0099cc', width: 6 }, { color: '#005577', width: 2 }],
    shadow: { opacity: 0.45 },
  }),
  preset({
    name: 'スクープ', font: 'Anton', color: '#ffffff', spacing: 3,
    strokes: [{ color: '#ff6600', width: 7 }],
    shadow: { opacity: 0.7, blur: 0, offsetX: 5, offsetY: 5 },
  }),
  preset({
    name: '報道スミ', font: 'Noto Sans JP', color: '#ffffff', bold: true,
    strokes: [{ color: '#333344', width: 6 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: '見出しイエロー', font: 'M PLUS 1p', color: '#ffe600', bold: true,
    strokes: [{ color: '#1a1a66', width: 7 }],
    shadow: { opacity: 0.6 },
  }),
  preset({
    name: '独占', font: 'Oswald', color: '#ffd700', bold: true, spacing: 4,
    strokes: [{ color: '#000000', width: 6 }],
    shadow: { opacity: 0.8, blur: 0 },
  }),
  preset({
    name: '記者会見', font: 'Noto Sans JP', color: '#e8f0f8', bold: true,
    strokes: [{ color: '#1e3a5c', width: 7 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#ffffff', to: '#c8d8e8' },
  }),
]);
