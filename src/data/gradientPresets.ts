import type { Gradient, GradientStop } from '../types';

export interface GradientPreset {
  id: string;
  name: string;
  stops: GradientStop[];
  direction: Gradient['direction'];
}

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'grad-sunset',
    name: 'サンセット',
    stops: [{ offset: 0, color: '#ffd23f' }, { offset: 1, color: '#ff3c5f' }],
    direction: 'vertical',
  },
  {
    id: 'grad-tropical',
    name: 'トロピカル',
    stops: [{ offset: 0, color: '#40e0d0' }, { offset: 0.5, color: '#ff8c00' }, { offset: 1, color: '#ff0080' }],
    direction: 'diagonal',
  },
  {
    id: 'grad-gold',
    name: 'ゴールド',
    stops: [{ offset: 0, color: '#fff3b0' }, { offset: 0.5, color: '#ffd700' }, { offset: 1, color: '#c8860a' }],
    direction: 'vertical',
  },
  {
    id: 'grad-silver',
    name: 'シルバー',
    stops: [{ offset: 0, color: '#ffffff' }, { offset: 0.5, color: '#c0c7d1' }, { offset: 1, color: '#8a93a1' }],
    direction: 'vertical',
  },
  {
    id: 'grad-rainbow',
    name: 'レインボー',
    stops: [{ offset: 0, color: '#ff3c5f' }, { offset: 0.5, color: '#ffd23f' }, { offset: 1, color: '#3cd3ff' }],
    direction: 'horizontal',
  },
  {
    id: 'grad-aurora',
    name: 'オーロラ',
    stops: [{ offset: 0, color: '#6ef195' }, { offset: 0.5, color: '#58c8f4' }, { offset: 1, color: '#a45cff' }],
    direction: 'diagonal',
  },
  {
    id: 'grad-ocean',
    name: 'オーシャン',
    stops: [{ offset: 0, color: '#36d1dc' }, { offset: 1, color: '#5b86e5' }],
    direction: 'vertical',
  },
  {
    id: 'grad-sakura',
    name: 'サクラ',
    stops: [{ offset: 0, color: '#ffe3ec' }, { offset: 1, color: '#ff9ec6' }],
    direction: 'vertical',
  },
  {
    id: 'grad-neon',
    name: 'ネオン',
    stops: [{ offset: 0, color: '#00f0ff' }, { offset: 1, color: '#ff00e0' }],
    direction: 'horizontal',
  },
  {
    id: 'grad-fire',
    name: 'ファイア',
    stops: [{ offset: 0, color: '#fff35c' }, { offset: 0.5, color: '#ff9800' }, { offset: 1, color: '#ff2d00' }],
    direction: 'vertical',
  },
  {
    id: 'grad-grape',
    name: 'グレープ',
    stops: [{ offset: 0, color: '#c471ed' }, { offset: 1, color: '#6a3093' }],
    direction: 'vertical',
  },
  {
    id: 'grad-mint',
    name: 'ミント',
    stops: [{ offset: 0, color: '#96fbc4' }, { offset: 1, color: '#56d1c4' }],
    direction: 'vertical',
  },
  {
    id: 'grad-midnight',
    name: 'ミッドナイト',
    stops: [{ offset: 0, color: '#4b6cb7' }, { offset: 1, color: '#182848' }],
    direction: 'vertical',
  },
  {
    id: 'grad-peach',
    name: 'ピーチ',
    stops: [{ offset: 0, color: '#ffecd2' }, { offset: 1, color: '#fcb69f' }],
    direction: 'vertical',
  },
];

// canvas の端点定義（左上基点）とは厳密一致しないが、スウォッチの視認用途には十分
const CSS_ANGLE: Record<Gradient['direction'], string> = {
  vertical: '180deg',
  horizontal: '90deg',
  diagonal: '135deg',
};

export function gradientPresetToCss(p: GradientPreset): string {
  const stops = p.stops.map(s => `${s.color} ${s.offset * 100}%`).join(', ');
  return `linear-gradient(${CSS_ANGLE[p.direction]}, ${stops})`;
}
