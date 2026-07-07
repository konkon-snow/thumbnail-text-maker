import { useRef } from 'react';
import type { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChange: (fontFamily: string) => void;
  onLocalFontAdd: (fontFamily: string) => void;
  onOpenModal: () => void;
}

export function FontPicker({ value, onChange, onLocalFontAdd, onOpenModal }: Props) {
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
        onClick={onOpenModal}
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
    </div>
  );
}
