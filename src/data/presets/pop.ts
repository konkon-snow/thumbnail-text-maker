import { defineCategory, preset } from './helpers';

export const popCategory = defineCategory('pop', 'ポップ・バラエティ', [
  preset({
    name: 'バラエティ黄', font: 'Dela Gothic One', color: '#ffe600',
    strokes: [{ color: '#e6003c', width: 7 }, { color: '#ffffff', width: 3 }],
    shadow: { color: '#7a0020', opacity: 0.9, blur: 2, offsetX: 6, offsetY: 6 },
  }),
  preset({
    name: 'ピンクポップ', font: 'Rounded Mplus 1c', color: '#ffffff', bold: true,
    strokes: [{ color: '#ff4d94', width: 7 }, { color: '#7a1043', width: 3 }],
    shadow: { opacity: 0.6 },
  }),
  preset({
    name: 'みかんグラデ', font: 'M PLUS 1p', color: '#ff9500', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#b34700', width: 3 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#ffb340', to: '#ff7a00' },
  }),
  preset({
    name: 'ソーダブルー', font: 'Rounded Mplus 1c', color: '#33ccff', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#0f5c99', width: 2 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#7de4ff', to: '#1f9dff' },
  }),
  preset({
    name: 'ガーリーレインボー', font: 'Dela Gothic One', color: '#ff88cc',
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#444444', width: 2 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#ff66cc', to: '#66ccff', direction: 'horizontal' },
  }),
  preset({
    name: 'リンゴレッド', font: 'Dela Gothic One', color: '#ff3b30',
    strokes: [{ color: '#ffffff', width: 6 }, { color: '#8e0e06', width: 3 }],
    shadow: { opacity: 0.5 },
  }),
  preset({
    name: 'メロングリーン', font: 'Rounded Mplus 1c', color: '#4cd964', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#14602a', width: 2 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#8ef09f', to: '#2eb84e' },
  }),
  preset({
    name: 'グレープ', font: 'M PLUS 1p', color: '#b366ff', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#4a1580', width: 2 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#c58aff', to: '#8a2be2' },
  }),
  preset({
    name: 'レモンスカッシュ', font: 'M PLUS 1p', color: '#ffe14d', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#c77800', width: 2 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#fff176', to: '#ffd400' },
  }),
  preset({
    name: '強め黒フチ黄', font: 'Black Han Sans', color: '#ffdd00',
    strokes: [{ color: '#000000', width: 10 }],
    shadow: { opacity: 0.85, blur: 0, offsetX: 6, offsetY: 6 },
  }),
  preset({
    name: '白×赤の定番', font: 'Dela Gothic One', color: '#ffffff',
    strokes: [{ color: '#e60033', width: 8 }],
    shadow: { opacity: 0.55 },
  }),
  preset({
    name: 'チョコミント', font: 'Rounded Mplus 1c', color: '#98f5e1', bold: true,
    strokes: [{ color: '#5a3d1e', width: 6 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#b8fff0', to: '#5fe0c0' },
  }),
  preset({
    name: 'サンセット', font: 'M PLUS 1p', color: '#ff7a5c', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#7a1043', width: 2 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#ff9a56', to: '#ff4f81', direction: 'horizontal' },
  }),
  preset({
    name: 'ポップ三重', font: 'Dela Gothic One', color: '#ffffff',
    strokes: [
      { color: '#111111', width: 6 },
      { color: '#ffe600', width: 4 },
      { color: '#111111', width: 2 },
    ],
    shadow: { opacity: 0.7 },
  }),
]);
