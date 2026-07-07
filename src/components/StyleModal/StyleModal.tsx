import { useEffect, useState } from 'react';
import type { TelopPreset } from '../../data/presets/types';
import { ALL_PRESETS } from '../../data/telopPresets';
import { DesignGalleryBody } from './DesignGalleryBody';
import { FontGalleryBody } from './FontGalleryBody';

export type StyleModalTab = 'design' | 'font';

interface Props {
  initialTab: StyleModalTab;
  initialPreviewText: string;
  currentFont: string;
  localFonts: string[];
  appliedPresetId: string | null;
  onApplyPreset: (preset: TelopPreset) => void;
  onSelectFont: (font: string) => void;
  onClose: () => void;
}

const FALLBACK_TEXT = 'あア';

function toPreviewText(value: string): string {
  return value.trim() === '' ? FALLBACK_TEXT : value;
}

export function StyleModal({
  initialTab,
  initialPreviewText,
  currentFont,
  localFonts,
  appliedPresetId,
  onApplyPreset,
  onSelectFont,
  onClose,
}: Props) {
  const [activeTab, setActiveTab] = useState<StyleModalTab>(initialTab);
  const [inputValue, setInputValue] = useState(initialPreviewText);
  const [previewText, setPreviewText] = useState(() => toPreviewText(initialPreviewText));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // 全カード再描画を伴うため入力はデバウンスして反映する
  useEffect(() => {
    const timer = setTimeout(() => setPreviewText(toPreviewText(inputValue)), 250);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const tabs: { id: StyleModalTab; label: string }[] = [
    { id: 'design', label: `デザイン（全${ALL_PRESETS.length}種）` },
    { id: 'font', label: 'フォント' },
  ];

  return (
    <div className="font-modal-overlay" onMouseDown={onClose}>
      <div
        className="telop-modal"
        onMouseDown={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="デザイン・フォント選択"
      >
        <div className="telop-modal-header">
          <div className="style-modal-tabs" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`style-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`style-panel-${tab.id}`}
                className={`style-modal-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <label className="telop-preview-control">
            プレビュー文字
            <input
              type="text"
              maxLength={8}
              value={inputValue}
              placeholder={FALLBACK_TEXT}
              onChange={e => setInputValue(e.target.value)}
            />
          </label>
          <button className="font-modal-close" type="button" onClick={onClose} aria-label="閉じる">
            ✕
          </button>
        </div>
        {/* 両タブとも常時マウントし hidden で切替（描画済み canvas・スクロール位置を保持） */}
        <div
          id="style-panel-design"
          role="tabpanel"
          aria-labelledby="style-tab-design"
          className="style-modal-panel"
          hidden={activeTab !== 'design'}
        >
          <DesignGalleryBody
            previewText={previewText}
            appliedPresetId={appliedPresetId}
            onApply={preset => {
              onApplyPreset(preset);
              onClose();
            }}
          />
        </div>
        <div
          id="style-panel-font"
          role="tabpanel"
          aria-labelledby="style-tab-font"
          className="style-modal-panel"
          hidden={activeTab !== 'font'}
        >
          <FontGalleryBody
            currentFont={currentFont}
            previewText={previewText}
            localFonts={localFonts}
            onSelect={font => {
              onSelectFont(font);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
