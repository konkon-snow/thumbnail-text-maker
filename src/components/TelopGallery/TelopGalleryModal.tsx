import { useCallback, useEffect, useRef, useState } from 'react';
import type { TelopPreset } from '../../data/presets/types';
import { ALL_PRESETS, TELOP_CATEGORIES } from '../../data/telopPresets';
import { PresetCard } from './PresetCard';

interface Props {
  initialPreviewText: string;
  appliedPresetId: string | null;
  onApply: (preset: TelopPreset) => void;
  onClose: () => void;
}

const FALLBACK_TEXT = 'あア';

function toPreviewText(value: string): string {
  return value.trim() === '' ? FALLBACK_TEXT : value;
}

export function TelopGalleryModal({ initialPreviewText, appliedPresetId, onApply, onClose }: Props) {
  const [inputValue, setInputValue] = useState(initialPreviewText);
  const [previewText, setPreviewText] = useState(() => toPreviewText(initialPreviewText));
  const [activeCategory, setActiveCategory] = useState('all');

  const bodyRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibilityCallbacksRef = useRef(new Map<Element, (visible: boolean) => void>());

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          visibilityCallbacksRef.current.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { root: bodyRef.current, rootMargin: '300px 0px' },
    );
    observerRef.current = observer;
    // 子カードの effect は親より先に実行されるため、登録済みの要素をここで observe する
    for (const el of visibilityCallbacksRef.current.keys()) observer.observe(el);
    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  const observe = useCallback((el: Element, onVisibleChange: (visible: boolean) => void) => {
    visibilityCallbacksRef.current.set(el, onVisibleChange);
    observerRef.current?.observe(el);
    return () => {
      visibilityCallbacksRef.current.delete(el);
      observerRef.current?.unobserve(el);
    };
  }, []);

  return (
    <div className="font-modal-overlay" onMouseDown={onClose}>
      <div
        className="telop-modal"
        onMouseDown={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="テロップデザイン一覧"
      >
        <div className="telop-modal-header">
          <span className="font-modal-title">テロップデザイン一覧</span>
          <span className="telop-modal-count">全{ALL_PRESETS.length}種</span>
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
        <div className="telop-modal-chips">
          <button
            type="button"
            className={`telop-chip${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            全て
          </button>
          {TELOP_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`telop-chip${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="telop-modal-body" ref={bodyRef}>
          {TELOP_CATEGORIES.map(cat => (
            <section
              key={cat.id}
              className="telop-section"
              // display 切替（unmount しない）で、カテゴリを行き来しても描画済み canvas を維持する
              style={activeCategory !== 'all' && activeCategory !== cat.id ? { display: 'none' } : undefined}
            >
              <div className="telop-section-label">
                {cat.label}
                <span className="telop-section-count">{cat.presets.length}</span>
              </div>
              <div className="telop-grid">
                {cat.presets.map(p => (
                  <PresetCard
                    key={p.id}
                    preset={p}
                    previewText={previewText}
                    applied={p.id === appliedPresetId}
                    onApply={onApply}
                    observe={observe}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
