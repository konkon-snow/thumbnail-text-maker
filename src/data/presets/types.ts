import type { TextBox } from '../../types';

/**
 * TextBox のうちプリセットが上書きするスタイル部分。
 * fontSize / lineHeight / x / y はユーザーのレイアウトを壊さないため含めない。
 */
export type TelopStyle = Pick<
  TextBox,
  'fontFamily' | 'bold' | 'italic' | 'letterSpacing' | 'color' | 'strokes' | 'shadow' | 'gradient'
>;

export interface TelopPreset extends TelopStyle {
  id: string;
  name: string;
  category: string;
}

export type TelopPresetSeed = TelopStyle & { name: string };

export interface TelopCategory {
  id: string;
  label: string;
  presets: TelopPreset[];
}
