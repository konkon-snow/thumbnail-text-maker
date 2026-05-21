import { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { FontPickerModal } from './FontPickerModal';

interface Props {
  value: string;
  previewText: string;
  onChange: (fontFamily: string) => void;
  localFonts: string[];
  onLocalFontAdd: (fontFamily: string) => void;
}

export function FontPicker({ value, previewText, onChange, localFonts, onLocalFontAdd }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      <button
        type="button"
        className="font-dropdown-trigger"
        style={{ fontFamily: value, flex: 1 }}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <span className="font-dropdown-label">{value}</span>
        <span className="font-dropdown-arrow" aria-hidden="true">▾</span>
      </button>

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

      {isOpen && (
        <FontPickerModal
          currentFont={value}
          previewText={previewText}
          localFonts={localFonts}
          onSelect={font => { onChange(font); setIsOpen(false); }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
