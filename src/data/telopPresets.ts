import type { TextBox } from '../types';
import type { TelopCategory, TelopPreset } from './presets/types';
import { simpleCategory } from './presets/simple';
import { popCategory } from './presets/pop';
import { gameCategory } from './presets/game';
import { travelCategory } from './presets/travel';
import { musicCategory } from './presets/music';
import { newsCategory } from './presets/news';
import { cuteCategory } from './presets/cute';
import { neonCategory } from './presets/neon';
import { sportsCategory } from './presets/sports';
import { elegantCategory } from './presets/elegant';
import { retroCategory } from './presets/retro';
import { horrorCategory } from './presets/horror';
import { handwritingCategory } from './presets/handwriting';
import { seasonalCategory } from './presets/seasonal';

export type { TelopCategory, TelopPreset, TelopStyle } from './presets/types';

export const TELOP_CATEGORIES: TelopCategory[] = [
  simpleCategory,
  popCategory,
  gameCategory,
  travelCategory,
  musicCategory,
  newsCategory,
  cuteCategory,
  neonCategory,
  sportsCategory,
  elegantCategory,
  retroCategory,
  horrorCategory,
  handwritingCategory,
  seasonalCategory,
];

export const ALL_PRESETS: TelopPreset[] = TELOP_CATEGORIES.flatMap(c => c.presets);

const PRESET_BY_ID = new Map(ALL_PRESETS.map(p => [p.id, p]));

export function findPreset(id: string): TelopPreset | undefined {
  return PRESET_BY_ID.get(id);
}

export function presetToTextBoxUpdates(preset: TelopPreset): Partial<TextBox> {
  // プリセットデータは全 TextBox から参照共有されるため、適用時に複製して渡す
  return structuredClone({
    fontFamily: preset.fontFamily,
    bold: preset.bold,
    italic: preset.italic,
    letterSpacing: preset.letterSpacing,
    color: preset.color,
    strokes: preset.strokes,
    shadow: preset.shadow,
    gradient: preset.gradient,
  });
}
