import type { TextBox } from '../../types';
import type { TelopPreset } from '../../data/presets/types';
import { ALL_PRESETS } from '../../data/telopPresets';
import { PresetCard } from '../TelopGallery/PresetCard';

interface Props {
  box: TextBox;
  appliedId: string | null;
  recentPresets: TelopPreset[];
  onApplyPreset: (preset: TelopPreset) => void;
  onOpenGallery: () => void;
}

export function StylePresets({ box, appliedId, recentPresets, onApplyPreset, onOpenGallery }: Props) {
  const previewText = box.text.split('\n')[0].slice(0, 6) || 'あア';
  // 88×40 のミニカードでは長い文字列が判読不能になるため短くする
  const miniPreviewText = previewText.slice(0, 3);

  return (
    <section className="panel-section">
      <div className="section-title-row">
        <h3 className="section-title">デザイン</h3>
        <button
          className="btn-outline btn-sm"
          type="button"
          onClick={() => onApplyPreset(ALL_PRESETS[Math.floor(Math.random() * ALL_PRESETS.length)])}
        >
          ランダム
        </button>
      </div>
      <button className="btn-accent btn-block" type="button" onClick={onOpenGallery}>
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
                onApply={onApplyPreset}
                width={88}
                height={40}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
