import type { TextBox, Shadow, Gradient } from '../../types';

interface StylePreset {
  name: string;
  previewColors: string[];
  strokes: TextBox['strokes'];
  shadow: Shadow;
  gradient: Gradient;
  color: string;
}

const PRESETS: StylePreset[] = [
  {
    name: '定番インパクト',
    previewColors: ['#ffffff', '#ffffff'],
    color: '#ffffff',
    strokes: [
      { enabled: true, color: '#000000', width: 8 },
      { enabled: true, color: '#ffffff', width: 2 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#000000', opacity: 0.8, blur: 8, offsetX: 5, offsetY: 5 },
    gradient: { enabled: false, stops: [{ offset: 0, color: '#ffffff' }, { offset: 1, color: '#cccccc' }], direction: 'vertical' },
  },
  {
    name: 'ゲーム実況',
    previewColors: ['#ffee00', '#ff6600'],
    color: '#ffee00',
    strokes: [
      { enabled: true, color: '#000000', width: 12 },
      { enabled: true, color: '#ffee00', width: 4 },
      { enabled: true, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#000000', opacity: 0.9, blur: 10, offsetX: 6, offsetY: 6 },
    gradient: { enabled: true, stops: [{ offset: 0, color: '#ffee00' }, { offset: 1, color: '#ff6600' }], direction: 'vertical' },
  },
  {
    name: '炎上系',
    previewColors: ['#ff0000', '#ffcc00'],
    color: '#ff4500',
    strokes: [
      { enabled: true, color: '#000000', width: 10 },
      { enabled: false, color: '#ffffff', width: 4 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#ff4500', opacity: 0.7, blur: 20, offsetX: 0, offsetY: 4 },
    gradient: { enabled: true, stops: [{ offset: 0, color: '#ff0000' }, { offset: 1, color: '#ffcc00' }], direction: 'vertical' },
  },
  {
    name: 'グロー発光',
    previewColors: ['#00ffff', '#00ffff'],
    color: '#ffffff',
    strokes: [
      { enabled: true, color: '#00ffff', width: 6 },
      { enabled: false, color: '#ffffff', width: 4 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#00ffff', opacity: 0.9, blur: 30, offsetX: 0, offsetY: 0 },
    gradient: { enabled: false, stops: [{ offset: 0, color: '#ffffff' }, { offset: 1, color: '#ccffff' }], direction: 'vertical' },
  },
  {
    name: 'エレガント金',
    previewColors: ['#ffd700', '#ffe87c'],
    color: '#ffd700',
    strokes: [
      { enabled: true, color: '#1a0a00', width: 4 },
      { enabled: false, color: '#ffffff', width: 4 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#7a4a00', opacity: 0.6, blur: 12, offsetX: 3, offsetY: 3 },
    gradient: { enabled: true, stops: [{ offset: 0, color: '#ffd700' }, { offset: 1, color: '#ffe87c' }], direction: 'vertical' },
  },
  {
    name: 'シンプル白',
    previewColors: ['#ffffff', '#dddddd'],
    color: '#ffffff',
    strokes: [
      { enabled: true, color: '#333333', width: 4 },
      { enabled: false, color: '#ffffff', width: 4 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#000000', opacity: 0.4, blur: 8, offsetX: 2, offsetY: 2 },
    gradient: { enabled: false, stops: [{ offset: 0, color: '#ffffff' }, { offset: 1, color: '#dddddd' }], direction: 'vertical' },
  },
];

interface Props {
  onChange: (updates: Partial<TextBox>) => void;
}

export function StylePresets({ onChange }: Props) {
  function applyPreset(preset: StylePreset) {
    onChange({
      color: preset.color,
      strokes: preset.strokes,
      shadow: preset.shadow,
      gradient: preset.gradient,
    });
  }

  function applyRandom() {
    const preset = PRESETS[Math.floor(Math.random() * PRESETS.length)];
    applyPreset(preset);
  }

  return (
    <section className="panel-section">
      <div className="section-title-row">
        <h3 className="section-title">プリセット</h3>
        <button className="btn-outline btn-sm" type="button" onClick={applyRandom}>
          ランダム
        </button>
      </div>
      <div className="preset-grid">
        {PRESETS.map(preset => (
          <button
            key={preset.name}
            className="preset-card"
            type="button"
            title={preset.name}
            onClick={() => applyPreset(preset)}
          >
            <span
              className="preset-swatch"
              style={{
                background: preset.previewColors.length === 2 && preset.previewColors[0] !== preset.previewColors[1]
                  ? `linear-gradient(to bottom, ${preset.previewColors[0]}, ${preset.previewColors[1]})`
                  : preset.previewColors[0],
              }}
            />
            <span className="preset-name">{preset.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
