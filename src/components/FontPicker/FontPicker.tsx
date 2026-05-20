import { useRef } from 'react';
import type { ChangeEvent } from 'react';
import { FONT_CATEGORIES } from '../../utils/canvasRenderer';

interface Props {
  value: string;
  onChange: (fontFamily: string) => void;
  localFonts: string[];
  onLocalFontAdd: (fontFamily: string) => void;
}

export function FontPicker({ value, onChange, localFonts, onLocalFontAdd }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const buffer = reader.result as ArrayBuffer;
      // Use filename (without extension) as font-family name
      const fontName = file.name.replace(/\.[^.]+$/, '');
      const face = new FontFace(fontName, buffer);
      await face.load();
      document.fonts.add(face);
      onLocalFontAdd(fontName);
      onChange(fontName);
    };
    reader.readAsArrayBuffer(file);
    // Reset so the same file can be re-uploaded
    e.target.value = '';
  };

  return (
    <div className="font-picker">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ fontFamily: value }}
      >
        {FONT_CATEGORIES.map(cat => (
          <optgroup key={cat.label} label={cat.label}>
            {cat.fonts.map(f => (
              <option key={f} value={f} style={{ fontFamily: f }}>
                {f}
              </option>
            ))}
          </optgroup>
        ))}
        {localFonts.length > 0 && (
          <optgroup label="ローカルフォント">
            {localFonts.map(f => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </optgroup>
        )}
      </select>
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
