import { useCallback, useEffect, useRef, useState } from 'react';
import type { TelopPreset } from '../../data/presets/types';
import { TELOP_CATEGORIES } from '../../data/telopPresets';
import { PresetCard } from '../TelopGallery/PresetCard';

interface Props {
  previewText: string;
  appliedPresetId: string | null;
  onApply: (preset: TelopPreset) => void;
}

export function DesignGalleryBody({ previewText, appliedPresetId, onApply }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const bodyRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibilityCallbacksRef = useRef(new Map<Element, (visible: boolean) => void>());

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
    <>
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
    </>
  );
}
