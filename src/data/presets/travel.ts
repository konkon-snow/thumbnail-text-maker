import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const travelCategory = defineCategory('travel', '旅行・おでかけ', [
  preset({
    name: '青空トリップ', font: 'Zen Kaku Gothic New', color: '#4fb3f0', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { color: '#0d47a1', opacity: 0.35, blur: 18, offsetX: 0, offsetY: 6 },
    gradient: { from: '#9be1ff', via: '#4fb3f0', to: '#1272c4', direction: 'diagonal' },
  }),
  preset({
    name: '旅情明朝', font: 'Zen Old Mincho', color: '#ffffff', bold: true,
    strokes: [{ color: '#33414f', width: 3 }],
    shadow: { opacity: 0.4, blur: 16, offsetX: 0, offsetY: 4 },
  }),
  preset({
    name: 'サンセットロード', font: 'Kaisei Decol', color: '#ff8f5e', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { color: '#8c2f52', opacity: 0.35, blur: 20, offsetX: 0, offsetY: 5 },
    gradient: { from: '#ffd76e', via: '#ff8f5e', to: '#e0447a', direction: 'diagonal' },
  }),
  preset({
    name: '筆の旅路', font: 'Yuji Syuku', color: '#1f1f1f',
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.3, blur: 14, offsetX: 2, offsetY: 4 },
  }),
  preset({
    name: 'トラベルスクリプト', font: 'Pacifico', color: '#ffffff',
    shadow: { color: '#0c4a6e', opacity: 0.5, blur: 22, offsetX: 0, offsetY: 5 },
  }),
  preset({
    name: '桜前線', font: 'Zen Old Mincho', color: '#ff9fc0', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }, { color: '#c2547e', width: 2 }],
    shadow: { color: '#b05070', opacity: 0.3, blur: 16, offsetX: 0, offsetY: 4 },
    gradient: { from: '#ffd9e8', to: '#ff8fb8' },
  }),
  preset({
    name: '新緑ハイキング', font: 'Zen Maru Gothic', color: '#5cb85c', bold: true,
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { color: '#1e5631', opacity: 0.35, blur: 16, offsetX: 0, offsetY: 5 },
    gradient: { from: '#b8e986', to: '#3e9d4e', direction: 'diagonal' },
  }),
  preset({
    name: '紅葉狩り', font: 'Shippori Antique B1', color: '#ff7a3d',
    strokes: [{ color: '#fff4e0', width: 4 }, { color: '#5c2314', width: 2 }],
    shadow: { opacity: 0.35, blur: 14, offsetX: 0, offsetY: 4 },
    gradient: { from: '#ffc14d', via: '#ff7a3d', to: '#c73a2e' },
  }),
  preset({
    name: '雪化粧', font: 'Zen Old Mincho', color: '#e8f4fd', bold: true,
    strokes: [{ color: '#6fa8d0', width: 3 }],
    shadow: { color: '#4a7ba6', opacity: 0.4, blur: 18, offsetX: 0, offsetY: 4 },
    gradient: { from: '#ffffff', to: '#bcdcf5' },
  }),
  preset({
    name: '南国バカンス', font: 'Mochiy Pop One', color: '#00c4b8',
    strokes: [{ color: '#ffffff', width: 5 }],
    shadow: { color: '#006b8f', opacity: 0.35, blur: 16, offsetX: 0, offsetY: 5 },
    gradient: { from: '#3ee8b5', to: '#00a3d9', direction: 'diagonal' },
  }),
  preset({
    name: '海と空のあいだ', font: 'M PLUS 1p', color: '#5ab8e8', bold: true,
    strokes: [{ color: '#0d3b66', width: 4 }],
    shadow: { opacity: 0.3, blur: 14, offsetX: 0, offsetY: 4 },
    gradient: { from: '#7fd4ff', via: '#ffffff', to: '#1e88c8' },
  }),
  preset({
    name: 'マジックアワー', font: 'Kaisei Decol', color: '#ff7e9a', bold: true,
    strokes: [{ color: '#ffffff', width: 4 }],
    shadow: { color: '#3d2b78', opacity: 0.4, blur: 20, offsetX: 0, offsetY: 5 },
    gradient: { from: '#ffc46b', via: '#ff7e9a', to: '#7a5ae0' },
  }),
  preset({
    name: '湯けむり紀行', font: 'Yuji Syuku', color: '#ffffff',
    strokes: [{ color: '#2e4e6e', width: 5 }],
    shadow: { opacity: 0.35, blur: 12, offsetX: 2, offsetY: 4 },
  }),
  preset({
    name: '週末おでかけ', font: 'Kiwi Maru', color: '#ffffff', bold: true,
    strokes: [{ color: '#4aa8e0', width: 6 }],
    shadow: { color: '#2a6f9e', opacity: 0.3, blur: 14, offsetX: 0, offsetY: 4 },
  }),
  preset({
    name: 'トラベルノート', font: 'Permanent Marker', color: '#2d2d2d',
    strokes: [{ color: '#ffffff', width: 6 }],
    shadow: { opacity: 0.25, blur: 10, offsetX: 3, offsetY: 3 },
  }),
]);
