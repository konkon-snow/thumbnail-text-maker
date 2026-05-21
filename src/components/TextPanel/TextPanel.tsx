import type { TextBox } from '../../types';
import { FontPicker } from '../FontPicker/FontPicker';
import { StrokeLayerPanel } from '../StrokeLayer/StrokeLayerPanel';

interface Props {
  box: TextBox;
  onChange: (updates: Partial<TextBox>) => void;
  onDelete: () => void;
  localFonts: string[];
  onLocalFontAdd: (name: string) => void;
}

export function TextPanel({ box, onChange, onDelete, localFonts, onLocalFontAdd }: Props) {
  return (
    <div className="text-panel">

      {/* テキスト */}
      <section className="panel-section">
        <h3 className="section-title">テキスト</h3>
        <textarea
          className="text-input"
          value={box.text}
          rows={3}
          onChange={e => onChange({ text: e.target.value })}
        />
      </section>

      {/* フォント */}
      <section className="panel-section">
        <h3 className="section-title">フォント</h3>
        <FontPicker
          value={box.fontFamily}
          previewText={box.text}
          onChange={fontFamily => onChange({ fontFamily })}
          localFonts={localFonts}
          onLocalFontAdd={onLocalFontAdd}
        />
        <div className="row-control">
          <label>サイズ</label>
          <div className="input-unit">
            <input
              type="number"
              min={8}
              max={400}
              value={box.fontSize}
              onChange={e => onChange({ fontSize: Math.max(8, parseInt(e.target.value) || 64) })}
            />
            <span className="unit">px</span>
          </div>
        </div>
      </section>

      {/* スタイル */}
      <section className="panel-section">
        <h3 className="section-title">スタイル</h3>
        <div className="row-control">
          <label>書体</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn bold-btn ${box.bold ? 'active' : ''}`}
              type="button"
              onClick={() => onChange({ bold: !box.bold })}
            >
              B
            </button>
            <button
              className={`toggle-btn italic-btn ${box.italic ? 'active' : ''}`}
              type="button"
              onClick={() => onChange({ italic: !box.italic })}
            >
              I
            </button>
          </div>
        </div>
        <div className="row-control">
          <label>文字色</label>
          <input
            type="color"
            value={box.color}
            onChange={e => onChange({ color: e.target.value })}
          />
        </div>
        <div className="row-control">
          <label>字間</label>
          <input
            type="range"
            min={-10}
            max={50}
            value={box.letterSpacing}
            onChange={e => onChange({ letterSpacing: parseInt(e.target.value) })}
          />
          <span className="value-display">{box.letterSpacing}px</span>
        </div>
        <div className="row-control">
          <label>行間</label>
          <input
            type="range"
            min={0.8}
            max={3.0}
            step={0.1}
            value={box.lineHeight}
            onChange={e => onChange({ lineHeight: parseFloat(e.target.value) })}
          />
          <span className="value-display">{box.lineHeight.toFixed(1)}</span>
        </div>
      </section>

      {/* 縁取り */}
      <section className="panel-section">
        <h3 className="section-title">縁取り</h3>
        {box.strokes.map((stroke, i) => (
          <StrokeLayerPanel
            key={i}
            index={i}
            stroke={stroke}
            onChange={updated => {
              const next = [...box.strokes] as TextBox['strokes'];
              next[i] = updated;
              onChange({ strokes: next });
            }}
          />
        ))}
      </section>

      {/* ドロップシャドウ */}
      <section className="panel-section">
        <div className="section-title-row">
          <h3 className="section-title">ドロップシャドウ</h3>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={box.shadow.enabled}
              onChange={e => onChange({ shadow: { ...box.shadow, enabled: e.target.checked } })}
            />
            <span className="toggle-track" />
          </label>
        </div>
        {box.shadow.enabled && (
          <div className="sub-controls">
            <div className="row-control">
              <label>色</label>
              <input
                type="color"
                value={box.shadow.color}
                onChange={e => onChange({ shadow: { ...box.shadow, color: e.target.value } })}
              />
            </div>
            <div className="row-control">
              <label>不透明度</label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={box.shadow.opacity}
                onChange={e => onChange({ shadow: { ...box.shadow, opacity: parseFloat(e.target.value) } })}
              />
              <span className="value-display">{Math.round(box.shadow.opacity * 100)}%</span>
            </div>
            <div className="row-control">
              <label>ぼかし</label>
              <input
                type="range"
                min={0}
                max={60}
                value={box.shadow.blur}
                onChange={e => onChange({ shadow: { ...box.shadow, blur: parseInt(e.target.value) } })}
              />
              <span className="value-display">{box.shadow.blur}</span>
            </div>
            <div className="row-control">
              <label>X</label>
              <input
                type="range"
                min={-40}
                max={40}
                value={box.shadow.offsetX}
                onChange={e => onChange({ shadow: { ...box.shadow, offsetX: parseInt(e.target.value) } })}
              />
              <span className="value-display">{box.shadow.offsetX}</span>
            </div>
            <div className="row-control">
              <label>Y</label>
              <input
                type="range"
                min={-40}
                max={40}
                value={box.shadow.offsetY}
                onChange={e => onChange({ shadow: { ...box.shadow, offsetY: parseInt(e.target.value) } })}
              />
              <span className="value-display">{box.shadow.offsetY}</span>
            </div>
          </div>
        )}
      </section>

      {/* グラデーション */}
      <section className="panel-section">
        <div className="section-title-row">
          <h3 className="section-title">グラデーション</h3>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={box.gradient.enabled}
              onChange={e => onChange({ gradient: { ...box.gradient, enabled: e.target.checked } })}
            />
            <span className="toggle-track" />
          </label>
        </div>
        {box.gradient.enabled && (
          <div className="sub-controls">
            <div className="row-control">
              <label>方向</label>
              <select
                value={box.gradient.direction}
                onChange={e =>
                  onChange({
                    gradient: {
                      ...box.gradient,
                      direction: e.target.value as 'horizontal' | 'vertical',
                    },
                  })
                }
              >
                <option value="vertical">縦</option>
                <option value="horizontal">横</option>
              </select>
            </div>
            {box.gradient.stops.map((stop, i) => (
              <div key={i} className="row-control">
                <label>{i === 0 ? '開始色' : '終了色'}</label>
                <input
                  type="color"
                  value={stop.color}
                  onChange={e => {
                    const next = [...box.gradient.stops];
                    next[i] = { ...stop, color: e.target.value };
                    onChange({ gradient: { ...box.gradient, stops: next } });
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 削除 */}
      <div className="panel-section">
        <button className="btn-danger btn-block" type="button" onClick={onDelete}>
          このテキストを削除
        </button>
      </div>
    </div>
  );
}
