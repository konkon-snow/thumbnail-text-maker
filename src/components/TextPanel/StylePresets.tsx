import { useCallback, useMemo, useState } from 'react';
import type { TextBox } from '../../types';
import type { TelopPreset } from '../../data/presets/types';
import { ALL_PRESETS, findPreset } from '../../data/telopPresets';
import { useRecentPresets } from '../../hooks/useRecentPresets';
import { PresetCard } from '../TelopGallery/PresetCard';
import { TelopGalleryModal } from '../TelopGallery/TelopGalleryModal';

interface Props {
  box: TextBox;
  onChange: (updates: Partial<TextBox>) => void;
}

function presetToUpdates(preset: TelopPreset): Partial<TextBox> {
  // プリセットデータは全 TextBox から参照共有されるため、適用時に複製して渡す
  return structuredClone({
    fontFamily: preset.fontFamily,
    bold: preset.bold,
    italic: preset.italic,
    letterSpacing: preset.letterSpacing,
    color: preset.color,
    strokes: preset.strokes,
    shadow: preset.shadow,
    gradient: preset.gradient,
  });
}

export function StylePresets({ box, onChange }: Props) {
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [appliedId, setAppliedId] = useState<string | null>(null);
  const { recentIds, pushRecent } = useRecentPresets();

  const applyPreset = useCallback(
    (preset: TelopPreset) => {
      onChange(presetToUpdates(preset));
      setAppliedId(preset.id);
      pushRecent(preset.id);
    },
    [onChange, pushRecent],
  );

  const applyRandom = useCallback(() => {
    applyPreset(ALL_PRESETS[Math.floor(Math.random() * ALL_PRESETS.length)]);
  }, [applyPreset]);

  const previewText = box.text.split('\n')[0].slice(0, 6) || 'あア';
  // 88×40 のミニカードでは長い文字列が判読不能になるため短くする
  const miniPreviewText = previewText.slice(0, 3);

  const recentPresets = useMemo(
    () => recentIds.map(findPreset).filter((p): p is TelopPreset => p !== undefined),
    [recentIds],
  );

  return (
    <section className="panel-section">
      <div className="section-title-row">
        <h3 className="section-title">デザイン</h3>
        <button className="btn-outline btn-sm" type="button" onClick={applyRandom}>
          ランダム
        </button>
      </div>
      <button className="btn-accent btn-block" type="button" onClick={() => setGalleryOpen(true)}>
        デザイン一覧を開く（全{ALL_PRESETS.length}種）
      </button>
      {recentPresets.length > 0 && (
        <>
          <div className="recent-preset-label">最近使ったデザイン</div>
          <div className="recent-preset-grid">
            {recentPresets.map(p => (
              <PresetCard
                key={p.id}
                preset={p}
                previewText={miniPreviewText}
                applied={p.id === appliedId}
                onApply={applyPreset}
                width={88}
                height={40}
              />
            ))}
          </div>
        </>
      )}
      {isGalleryOpen && (
        <TelopGalleryModal
          initialPreviewText={previewText}
          appliedPresetId={appliedId}
          onApply={applyPreset}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </section>
  );
}
