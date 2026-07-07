import type { Gradient, GradientStop, TextBox } from '../../types';
import { GRADIENT_PRESETS, gradientPresetToCss } from '../../data/gradientPresets';

interface Props {
  box: TextBox;
  onChange: (updates: Partial<TextBox>) => void;
}

const STOP_LABELS: Record<number, string[]> = {
  2: ['開始色', '終了色'],
  3: ['開始色', '中間色', '終了色'],
};

export function GradientSection({ box, onChange }: Props) {
  const { gradient } = box;
  const labels = STOP_LABELS[gradient.stops.length] ?? STOP_LABELS[2];

  const setStops = (stops: GradientStop[]) => onChange({ gradient: { ...gradient, stops } });

  const addMiddleStop = () => {
    const first = gradient.stops[0];
    const last = gradient.stops[gradient.stops.length - 1];
    setStops([
      { ...first, offset: 0 },
      { offset: 0.5, color: first.color },
      { ...last, offset: 1 },
    ]);
  };

  const removeMiddleStop = () => {
    const first = gradient.stops[0];
    const last = gradient.stops[gradient.stops.length - 1];
    setStops([{ ...first, offset: 0 }, { ...last, offset: 1 }]);
  };

  return (
    <section className="panel-section">
      <div className="section-title-row">
        <h3 className="section-title">グラデーション</h3>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={gradient.enabled}
            onChange={e => onChange({ gradient: { ...gradient, enabled: e.target.checked } })}
          />
          <span className="toggle-track" />
        </label>
      </div>
      {gradient.enabled && (
        <div className="sub-controls">
          <div className="gradient-swatch-grid">
            {GRADIENT_PRESETS.map(p => (
              <button
                key={p.id}
                type="button"
                className="gradient-swatch"
                title={p.name}
                aria-label={p.name}
                style={{ background: gradientPresetToCss(p) }}
                onClick={() =>
                  onChange({
                    gradient: { enabled: true, stops: structuredClone(p.stops), direction: p.direction },
                  })
                }
              />
            ))}
          </div>
          <div className="row-control">
            <label>方向</label>
            <select
              value={gradient.direction}
              onChange={e =>
                onChange({ gradient: { ...gradient, direction: e.target.value as Gradient['direction'] } })
              }
            >
              <option value="vertical">縦</option>
              <option value="horizontal">横</option>
              <option value="diagonal">斜め</option>
            </select>
          </div>
          {gradient.stops.map((stop, i) => (
            <div key={i} className="row-control">
              <label>{labels[i]}</label>
              <input
                type="color"
                value={stop.color}
                onChange={e => {
                  const next = [...gradient.stops];
                  next[i] = { ...stop, color: e.target.value };
                  setStops(next);
                }}
              />
              {gradient.stops.length === 3 && i === 1 && (
                <button
                  className="btn-outline btn-sm"
                  type="button"
                  onClick={removeMiddleStop}
                  aria-label="中間色を削除"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          {gradient.stops.length === 2 && (
            <button className="btn-outline btn-sm" type="button" onClick={addMiddleStop}>
              ＋中間色を追加
            </button>
          )}
        </div>
      )}
    </section>
  );
}
