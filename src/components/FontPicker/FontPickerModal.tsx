import { useEffect } from 'react';
import { FONT_CATEGORIES } from '../../utils/canvasRenderer';

interface Props {
  currentFont: string;
  previewText: string;
  localFonts: string[];
  onSelect: (font: string) => void;
  onClose: () => void;
}

export function FontPickerModal({ currentFont, previewText, localFonts, onSelect, onClose }: Props) {
  const display = previewText.split('\n')[0].slice(0, 12) || 'あ Aa 123';

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="font-modal-overlay" onMouseDown={onClose}>
      <div
        className="font-modal"
        onMouseDown={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="フォントを選択"
      >
        <div className="font-modal-header">
          <span className="font-modal-title">フォントを選択</span>
          <button className="font-modal-close" type="button" onClick={onClose} aria-label="閉じる">✕</button>
        </div>
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
      </div>
    </div>
  );
}
