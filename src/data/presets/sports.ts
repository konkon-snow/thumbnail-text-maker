import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const sportsCategory = defineCategory('sports', 'スポーツ・熱血', [
  preset({
    name: '熱血', font: 'Anton', color: '#ff3300', italic: true, spacing: 3,
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#111111', width: 7 }],
    shadow: { opacity: 0.8, blur: 2, offsetX: 6, offsetY: 6 },
    gradient: { from: '#ff5c33', to: '#cc1100' },
  }),
  preset({
    name: '勝負服', font: 'Black Han Sans', color: '#ffffff',
    strokes: [{ color: '#e60033', width: 7 }, { color: '#1a0008', width: 3 }],
    shadow: { opacity: 0.6 },
  }),
  preset({
    name: '疾走', font: 'Oswald', color: '#ffffff', bold: true, italic: true, spacing: 3,
    strokes: [{ color: '#0055cc', width: 7 }],
    shadow: { opacity: 0.5, blur: 4, offsetX: 8 },
  }),
  preset({
    name: 'ファイト', font: 'Rampart One', color: '#ffaa00',
    strokes: [{ color: '#000000', width: 8 }],
    shadow: { opacity: 0.85, blur: 0, offsetX: 5, offsetY: 5 },
    gradient: { from: '#ffd400', to: '#ff6600' },
  }),
  preset({
    name: 'チャンピオン', font: 'Anton', color: '#ffd700', spacing: 3,
    strokes: [{ color: '#000000', width: 6 }],
    shadow: { opacity: 0.7 },
    gradient: { from: '#ffe27a', to: '#cc8800' },
  }),
  preset({
    name: 'ピッチグリーン', font: 'Russo One', color: '#ffffff',
    strokes: [{ color: '#0c7a2e', width: 7 }],
    shadow: { opacity: 0.55 },
  }),
  preset({
    name: '炎の魂', font: 'Black Han Sans', color: '#ff8800',
    strokes: [{ color: '#3a0c00', width: 8 }],
    shadow: { color: '#ff4400', opacity: 0.55, blur: 16, offsetX: 0, offsetY: 2 },
    gradient: { from: '#ffdd00', to: '#ff2200' },
  }),
  preset({
    name: 'アクアスプラッシュ', font: 'Oswald', color: '#55ccee', bold: true, italic: true,
    strokes: [{ color: '#ffffff', width: 4 }, { color: '#0a4a66', width: 2 }],
    shadow: { opacity: 0.45 },
    gradient: { from: '#aef4ff', to: '#28a8d8' },
  }),
  preset({
    name: '筋肉イエロー', font: 'Anton', color: '#ffe600', spacing: 3,
    strokes: [{ color: '#000000', width: 9 }],
    shadow: { opacity: 0.9, blur: 0, offsetX: 6, offsetY: 6 },
  }),
  preset({
    name: '王者の風格', font: 'Bebas Neue', color: '#ffffff', spacing: 4,
    strokes: [{ color: '#5a2ca0', width: 6 }, { color: '#ffd700', width: 2 }],
    shadow: { opacity: 0.6 },
  }),
  preset({
    name: '白熱バトル', font: 'M PLUS 1p', color: '#ffffff', bold: true, italic: true,
    strokes: [{ color: '#ff3300', width: 6 }, { color: '#7a0c00', width: 3 }],
    shadow: { opacity: 0.7, blur: 3, offsetX: 5, offsetY: 5 },
  }),
  preset({
    name: 'シルバーレコード', font: 'Russo One', color: '#e0e0e8',
    strokes: [{ color: '#2a2a3a', width: 5 }],
    shadow: { opacity: 0.5 },
    gradient: { from: '#c0c0d0', to: '#f8f8ff', direction: 'horizontal' },
  }),
  preset({
    name: '稲妻ボルト', font: 'Dela Gothic One', color: '#ffee33', italic: true,
    strokes: [{ color: '#1a2a8a', width: 6 }, { color: '#0a0a2a', width: 3 }],
    shadow: { color: '#3355ff', opacity: 0.6, blur: 14, offsetX: 4, offsetY: 4 },
    gradient: { from: '#ffffff', via: '#ffee33', to: '#ffaa00' },
  }),
  preset({
    name: '実況中継', font: 'Russo One', color: '#ffffff', spacing: 3,
    strokes: [{ color: '#d81a1a', width: 6 }, { color: '#28060a', width: 3 }],
    shadow: { opacity: 0.65, blur: 2, offsetX: 5, offsetY: 5 },
  }),
  preset({
    name: 'ファイヤーダッシュ', font: 'Anton', color: '#ff6600', italic: true, spacing: 3,
    strokes: [{ color: '#ffffff', width: 3 }, { color: '#4a0c00', width: 7 }],
    shadow: { color: '#ff3300', opacity: 0.6, blur: 18, offsetX: 6, offsetY: 2 },
    gradient: { from: '#ffee00', via: '#ff8800', to: '#ff2200' },
  }),
  preset({
    name: '逆転勝利', font: 'Russo One', color: '#ffdd00',
    strokes: [{ color: '#00287a', width: 7 }, { color: '#ffffff', width: 3 }],
    shadow: { opacity: 0.7, blur: 0, offsetX: 5, offsetY: 5 },
  }),
]);
