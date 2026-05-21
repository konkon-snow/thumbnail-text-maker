import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { FONT_CATEGORIES } from '../../utils/canvasRenderer';

interface Props {
  value: string;
  onChange: (fontFamily: string) => void;
  onPreview?: (font: string) => void;
  onPreviewEnd?: (originalFont: string) => void;
  localFonts: string[];
  onLocalFontAdd: (fontFamily: string) => void;
}

export function FontPicker({ value, onChange, onPreview, onPreviewEnd, localFonts, onLocalFontAdd }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const originalFontRef = useRef(value);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onPreviewEnd?.(originalFontRef.current);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onPreviewEnd]);

  const handleTriggerClick = () => {
    originalFontRef.current = value;
    setIsOpen(o => !o);
  };

  const handleOptionClick = (font: string) => {
    originalFontRef.current = font;
    onChange(font);
    setIsOpen(false);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const buffer = reader.result as ArrayBuffer;
      const fontName = file.name.replace(/\.[^.]+$/, '');
      const face = new FontFace(fontName, buffer);
      await face.load();
      document.fonts.add(face);
      onLocalFontAdd(fontName);
      onChange(fontName);
    };
    reader.readAsArrayBuffer(file);
    e.target.value = '';
  };

  return (
    <div className="font-picker">
      <div className="font-dropdown" ref={dropdownRef}>
        <button
          type="button"
          className="font-dropdown-trigger"
          style={{ fontFamily: value }}
          onClick={handleTriggerClick}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="font-dropdown-label">{value}</span>
          <span className="font-dropdown-arrow" aria-hidden="true">▾</span>
        </button>

        {isOpen && (
          <div
            className="font-dropdown-menu"
            role="listbox"
            onMouseLeave={() => onPreviewEnd?.(originalFontRef.current)}
          >
            {FONT_CATEGORIES.map(cat => (
              <div key={cat.label} className="font-dropdown-group">
                <div className="font-dropdown-grouplabel">{cat.label}</div>
                {cat.fonts.map(f => (
                  <div
                    key={f}
                    role="option"
                    aria-selected={f === value}
                    className={`font-dropdown-item ${f === value ? 'selected' : ''}`}
                    style={{ fontFamily: f }}
                    onMouseEnter={() => onPreview?.(f)}
                    onClick={() => handleOptionClick(f)}
                  >
                    {f}
                  </div>
                ))}
              </div>
            ))}
            {localFonts.length > 0 && (
              <div className="font-dropdown-group">
                <div className="font-dropdown-grouplabel">ローカルフォント</div>
                {localFonts.map(f => (
                  <div
                    key={f}
                    role="option"
                    aria-selected={f === value}
                    className={`font-dropdown-item ${f === value ? 'selected' : ''}`}
                    onMouseEnter={() => onPreview?.(f)}
                    onClick={() => handleOptionClick(f)}
                  >
                    {f}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <button
        className="btn-outline btn-sm"
        onClick={() => fileInputRef.current?.click()}
        type="button"
      >
        + フォント追加
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".ttf,.otf,.woff,.woff2"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}
