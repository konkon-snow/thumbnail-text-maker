import { FONT_CATEGORIES } from '../../utils/canvasRenderer';

interface Props {
  currentFont: string;
  previewText: string;
  localFonts: string[];
  onSelect: (font: string) => void;
}

export function FontGalleryBody({ currentFont, previewText, localFonts, onSelect }: Props) {
  const display = previewText.split('\n')[0].slice(0, 12) || 'あ Aa 123';

  return (
    <div className="font-modal-body">
      {FONT_CATEGORIES.map(cat => (
        <div key={cat.label} className="font-modal-section">
          <div className="font-modal-section-label">{cat.label}</div>
          <div className="font-modal-grid">
            {cat.fonts.map(f => (
              <button
                key={f}
                type="button"
                className={`font-card${f === currentFont ? ' selected' : ''}`}
                onClick={() => onSelect(f)}
              >
                <span className="font-card-preview" style={{ fontFamily: f }}>{display}</span>
                <span className="font-card-name">{f}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {localFonts.length > 0 && (
        <div className="font-modal-section">
          <div className="font-modal-section-label">ローカルフォント</div>
          <div className="font-modal-grid">
            {localFonts.map(f => (
              <button
                key={f}
                type="button"
                className={`font-card${f === currentFont ? ' selected' : ''}`}
                onClick={() => onSelect(f)}
              >
                <span className="font-card-preview" style={{ fontFamily: f }}>{display}</span>
                <span className="font-card-name">{f}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
