import type { Gradient, Shadow, StrokeLayer, TextBox } from '../../types';
import type { TelopCategory, TelopPresetSeed } from './types';

interface StrokeInput {
  color: string;
  width: number;
}

export interface PresetInput {
  name: string;
  font: string;
  color: string;
  bold?: boolean;
  italic?: boolean;
  /** 字間（px）。省略時 2 */
  spacing?: number;
  /** 縁取り。内側 → 外側の順に最大3つ */
  strokes?: StrokeInput[];
  /** 指定すると enabled: true でデフォルト値にマージ */
  shadow?: Partial<Omit<Shadow, 'enabled'>>;
  gradient?: { from: string; to: string; direction?: 'horizontal' | 'vertical' };
}

const DISABLED_STROKE: StrokeLayer = { enabled: false, color: '#000000', width: 4 };

const DEFAULT_SHADOW: Omit<Shadow, 'enabled'> = {
  color: '#000000',
  opacity: 0.8,
  blur: 8,
  offsetX: 4,
  offsetY: 4,
};

export function preset(input: PresetInput): TelopPresetSeed {
  const strokes = [0, 1, 2].map(i => {
    const s = input.strokes?.[i];
    return s ? { enabled: true, color: s.color, width: s.width } : { ...DISABLED_STROKE };
  }) as TextBox['strokes'];

  const shadow: Shadow = input.shadow
    ? { enabled: true, ...DEFAULT_SHADOW, ...input.shadow }
    : { enabled: false, ...DEFAULT_SHADOW };

  const gradient: Gradient = input.gradient
    ? {
        enabled: true,
        stops: [
          { offset: 0, color: input.gradient.from },
          { offset: 1, color: input.gradient.to },
        ],
        direction: input.gradient.direction ?? 'vertical',
      }
    : {
        enabled: false,
        stops: [
          { offset: 0, color: input.color },
          { offset: 1, color: input.color },
        ],
        direction: 'vertical',
      };

  return {
    name: input.name,
    fontFamily: input.font,
    bold: input.bold ?? false,
    italic: input.italic ?? false,
    letterSpacing: input.spacing ?? 2,
    color: input.color,
    strokes,
    shadow,
    gradient,
  };
}

export function defineCategory(id: string, label: string, seeds: TelopPresetSeed[]): TelopCategory {
  return {
    id,
    label,
    presets: seeds.map((seed, i) => ({
      ...seed,
      id: `${id}-${String(i + 1).padStart(2, '0')}`,
      category: id,
    })),
  };
}
