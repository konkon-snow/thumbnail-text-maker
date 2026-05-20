import type { StrokeLayer } from '../../types';

interface Props {
  index: number;
  stroke: StrokeLayer;
  onChange: (updated: StrokeLayer) => void;
}

export function StrokeLayerPanel({ index, stroke, onChange }: Props) {
  return (
    <div className={`stroke-layer ${stroke.enabled ? 'enabled' : ''}`}>
      <div className="stroke-header">
        <label className="stroke-label">
          <input
            type="checkbox"
            checked={stroke.enabled}
            onChange={e => onChange({ ...stroke, enabled: e.target.checked })}
          />
          <span>縁取り {index + 1}</span>
        </label>
        {stroke.enabled && (
          <div className="stroke-inline">
            <input
              type="color"
              value={stroke.color}
              onChange={e => onChange({ ...stroke, color: e.target.value })}
              title="縁取り色"
            />
            <span className="value-display">{stroke.width}px</span>
          </div>
        )}
      </div>
      {stroke.enabled && (
        <div className="row-control">
          <label>太さ</label>
          <input
            type="range"
            min={1}
            max={30}
            value={stroke.width}
            onChange={e => onChange({ ...stroke, width: parseInt(e.target.value) })}
          />
        </div>
      )}
    </div>
  );
}
