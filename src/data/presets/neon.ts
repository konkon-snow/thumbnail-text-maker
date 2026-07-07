import { defineCategory, preset } from './helpers';

// 注意: プリセット id は配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）
export const neonCategory = defineCategory('neon', 'ネオン・サイバー', [
  preset({
    name: 'シアンネオン', font: 'Orbitron', color: '#ffffff', bold: true,
    strokes: [{ color: '#00e5ff', width: 5 }],
    shadow: { color: '#00e5ff', opacity: 0.9, blur: 25, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'マゼンタネオン', font: 'Orbitron', color: '#ffffff', bold: true,
    strokes: [{ color: '#ff00cc', width: 5 }],
    shadow: { color: '#ff00cc', opacity: 0.9, blur: 25, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ライムグロー', font: 'Russo One', color: '#ccff33',
    strokes: [{ color: '#336600', width: 3 }],
    shadow: { color: '#aaff00', opacity: 0.8, blur: 20, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'サイバーパープル', font: 'Orbitron', color: '#9a5cff', bold: true,
    strokes: [{ color: '#2a0a55', width: 5 }],
    shadow: { color: '#8833ff', opacity: 0.7, blur: 18, offsetX: 0, offsetY: 0 },
    gradient: { from: '#cba3ff', to: '#6a2bd9' },
  }),
  preset({
    name: 'エレクトリック', font: 'Russo One', color: '#bfeaff',
    strokes: [{ color: '#0055aa', width: 5 }],
    shadow: { color: '#3399ff', opacity: 0.85, blur: 22, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ffffff', to: '#7ad4ff' },
  }),
  preset({
    name: '東京ナイト', font: 'DotGothic16', color: '#ff66cc',
    strokes: [{ color: '#33001f', width: 4 }],
    shadow: { color: '#ff33bb', opacity: 0.8, blur: 18, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ウルトラバイオレット', font: 'Bebas Neue', color: '#ffffff', spacing: 4,
    strokes: [{ color: '#aa00ff', width: 5 }],
    shadow: { color: '#aa00ff', opacity: 0.9, blur: 24, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '蛍光サイン', font: 'Bebas Neue', color: '#39ff14', spacing: 4,
    strokes: [{ color: '#0c3300', width: 3 }],
    shadow: { color: '#39ff14', opacity: 0.85, blur: 22, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'レッドアラート', font: 'Oswald', color: '#ffffff', bold: true, spacing: 3,
    strokes: [{ color: '#ff1a1a', width: 5 }],
    shadow: { color: '#ff0000', opacity: 0.85, blur: 20, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ホログラム', font: 'Orbitron', color: '#aaf0ff', bold: true,
    strokes: [{ color: '#ffffff', width: 2 }],
    shadow: { color: '#99e8ff', opacity: 0.6, blur: 16, offsetX: 0, offsetY: 0 },
    gradient: { from: '#66ffe8', to: '#cc99ff', direction: 'horizontal' },
  }),
  preset({
    name: 'ブレードシティ', font: 'Russo One', color: '#ff6633',
    strokes: [{ color: '#33000f', width: 4 }],
    shadow: { color: '#ff3388', opacity: 0.7, blur: 16, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ff9900', to: '#ff00aa', direction: 'horizontal' },
  }),
  preset({
    name: '白熱灯', font: 'Oswald', color: '#ffffff', bold: true, spacing: 3,
    strokes: [{ color: '#ffe8b0', width: 3 }],
    shadow: { color: '#ffcc66', opacity: 0.9, blur: 22, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '電脳グリッド', font: 'Press Start 2P', color: '#00ffcc', spacing: 0,
    strokes: [{ color: '#003328', width: 4 }],
    shadow: { color: '#00ffcc', opacity: 0.75, blur: 14, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'ヴェイパーウェイブ', font: 'Monoton', color: '#ff71ce', spacing: 4,
    strokes: [{ color: '#1a0a33', width: 3 }],
    shadow: { color: '#ff71ce', opacity: 0.85, blur: 28, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ff71ce', via: '#b967ff', to: '#01cdfe', direction: 'diagonal' },
  }),
  preset({
    name: 'サイバーパンク', font: 'Train One', color: '#fcee0a',
    strokes: [{ color: '#00f0ff', width: 2 }, { color: '#0a0a12', width: 5 }],
    shadow: { color: '#00f0ff', opacity: 0.8, blur: 22, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: 'グリッチ', font: 'Orbitron', color: '#ffffff', bold: true,
    strokes: [{ color: '#ff0055', width: 3 }, { color: '#00e5ff', width: 6 }],
    shadow: { color: '#ff00cc', opacity: 0.7, blur: 20, offsetX: 3, offsetY: 0 },
  }),
  preset({
    name: 'サンセットラン', font: 'Bebas Neue', color: '#ff2975', spacing: 4,
    strokes: [{ color: '#2a0a3a', width: 4 }],
    shadow: { color: '#ff2975', opacity: 0.8, blur: 24, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ffd319', via: '#ff2975', to: '#8c1eff' },
  }),
  preset({
    name: 'マイアミネオン', font: 'Monoton', color: '#7afcff', spacing: 3,
    strokes: [{ color: '#003340', width: 2 }],
    shadow: { color: '#00e5ff', opacity: 0.9, blur: 32, offsetX: 0, offsetY: 0 },
  }),
  preset({
    name: '電光掲示板', font: 'Train One', color: '#ffaa00',
    strokes: [{ color: '#331a00', width: 4 }],
    shadow: { color: '#ff8800', opacity: 0.85, blur: 20, offsetX: 0, offsetY: 0 },
    gradient: { from: '#ffd44d', to: '#ff7700' },
  }),
  preset({
    name: 'オーロラグロー', font: 'Orbitron', color: '#66ffd0', bold: true,
    strokes: [{ color: '#0a2a2e', width: 4 }],
    shadow: { color: '#39ffd0', opacity: 0.8, blur: 30, offsetX: 0, offsetY: 0 },
    gradient: { from: '#39ff9e', via: '#00cfff', to: '#c86aff', direction: 'diagonal' },
  }),
]);
