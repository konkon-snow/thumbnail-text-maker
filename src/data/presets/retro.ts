import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）

export const retroCategory = defineCategory('retro', 'レトロ・ドット', [
  preset({
    name: 'CRTグリーン', font: 'DotGothic16', color: '#33ff66',
    strokes: [{ color: '#0c3318', width: 3 }],
    shadow: { color: '#33ff66', opacity: 0.6, blur: 12, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'アンバー端末', font: 'DotGothic16', color: '#ffb000',
    strokes: [{ color: '#3a2800', width: 3 }],
    shadow: { color: '#ffb000', opacity: 0.5, blur: 10, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '8bitずれ影', font: 'Press Start 2P', color: '#ffffff', spacing: 0,
    strokes: [{ color: '#000000', width: 3 }],
    shadow: { color: '#ff00aa', opacity: 0.9, blur: 0, offsetX: 5, offsetY: 5 },
  }),
  preset({
    name: 'ファミレトロ', font: 'Press Start 2P', color: '#ff5555', spacing: 0,
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#7a0000', width: 2 }],
    shadow: { opacity: 0.8, blur: 0 },
  }),
  preset({
    name: 'セピア', font: 'New Tegomin', color: '#6e5230', bold: true,
    strokes: [{ color: '#f2e8d0', width: 5 }],
    shadow: { opacity: 0.4 },
    gradient: { from: '#8a6a40', to: '#4a3418' },
  }),
  preset({
    name: '純喫茶', font: 'Zen Maru Gothic', color: '#fff2d9', bold: true,
    strokes: [{ color: '#5c3a1e', width: 6 }],
    shadow: { color: '#d98a2b', opacity: 0.6, blur: 0 },
  }),
  preset({
    name: '昭和ポスター', font: 'Dela Gothic One', color: '#e63946',
    strokes: [{ color: '#ffe8b0', width: 6 }, { color: '#2a1a0a', width: 2 }],
    shadow: { opacity: 0.7, blur: 0, offsetX: 5, offsetY: 5 },
    gradient: { from: '#ff5c5c', to: '#c1121f' },
  }),
  preset({
    name: 'ゲームボーイ', font: 'DotGothic16', color: '#9bbc0f',
    strokes: [{ color: '#0f380f', width: 5 }],
    shadow: { color: '#306230', opacity: 0.8, blur: 0, offsetX: 3, offsetY: 3 },
  }),
  preset({
    name: 'VHSずれ', font: 'Russo One', color: '#e8e8e8',
    strokes: [{ color: '#000000', width: 4 }],
    shadow: { color: '#00ffff', opacity: 0.7, blur: 0, offsetX: -4, offsetY: 0 },
  }),
  preset({
    name: '大正浪漫', font: 'New Tegomin', color: '#5a3a80', bold: true,
    strokes: [{ color: '#e8d5a8', width: 5 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#6e4a99', to: '#33204a' },
  }),
  preset({
    name: '駄菓子屋', font: 'Yomogi', color: '#ff8800', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#7a3f00', width: 2 }],
    shadow: { opacity: 0.55, blur: 0 },
  }),
  preset({
    name: 'ピクセルスカイ', font: 'Press Start 2P', color: '#55aaff', spacing: 0,
    strokes: [{ color: '#ffffff', width: 4 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#7ad4ff', to: '#2b6cb8' },
  }),
  preset({
    name: 'ネオン喫茶', font: 'Stick', color: '#ffd1ec',
    strokes: [{ color: '#5c1040', width: 4 }],
    shadow: { color: '#ff4fc3', opacity: 0.7, blur: 16, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '昭和家電', font: 'Stick', color: '#fff6e0', bold: true,
    strokes: [{ color: '#d95f18', width: 5 }, { color: '#3a2410', width: 2 }],
    shadow: { opacity: 0.5, blur: 0 },
  }),
  preset({
    name: 'メロンソーダ', font: 'Stick', color: '#66d95c', bold: true,
    strokes: [{ color: '#0f4d1a', width: 5 }],
    shadow: { color: '#ff5c5c', opacity: 0.5, blur: 0, offsetX: 4, offsetY: 4 },
    gradient: { from: '#a8f57a', to: '#2eb82e' },
  }),
  preset({
    name: 'ブラウン管RGB', font: 'DotGothic16', color: '#ffffff',
    strokes: [{ color: '#000000', width: 5 }],
    shadow: { opacity: 0.6, blur: 0, offsetX: 3, offsetY: 3 },
    gradient: { from: '#ff5c5c', via: '#7aff8c', to: '#5c8aff', direction: 'diagonal' },
  }),
  preset({
    name: 'カセット金', font: 'Press Start 2P', color: '#ffd24d', spacing: 0,
    strokes: [{ color: '#5c3a00', width: 3 }, { color: '#fff2cc', width: 2 }],
    shadow: { opacity: 0.8, blur: 0, offsetX: 4, offsetY: 4 },
  }),
]);
