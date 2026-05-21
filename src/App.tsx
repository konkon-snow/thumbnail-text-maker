import { useState, useCallback, useRef } from 'react';
import type { TextBox } from './types';
import { CanvasPreview, CANVAS_WIDTH, CANVAS_HEIGHT } from './components/Canvas/CanvasPreview';
import { TextPanel } from './components/TextPanel/TextPanel';
import { getCenteredPosition, getAlignedPosition } from './utils/canvasRenderer';
import type { AlignH, AlignV } from './utils/canvasRenderer';

function createDefaultBox(): TextBox {
  return {
    id: crypto.randomUUID(),
    text: 'サムネイルテキスト',
    x: 0,
    y: 0,
    fontFamily: 'Dela Gothic One',
    fontSize: 72,
    color: '#ffffff',
    bold: false,
    italic: false,
    letterSpacing: 2,
    lineHeight: 1.2,
    strokes: [
      { enabled: true, color: '#000000', width: 8 },
      { enabled: false, color: '#ffffff', width: 4 },
      { enabled: false, color: '#000000', width: 2 },
    ],
    shadow: { enabled: true, color: '#000000', opacity: 0.6, blur: 12, offsetX: 4, offsetY: 4 },
    gradient: {
      enabled: false,
      stops: [
        { offset: 0, color: '#ff6b35' },
        { offset: 1, color: '#f7c59f' },
      ],
      direction: 'vertical',
    },
  };
}

export default function App() {
  const [textBoxes, setTextBoxes] = useState<TextBox[]>(() => {
    const box = createDefaultBox();
    const pos = getCenteredPosition(box, CANVAS_WIDTH, CANVAS_HEIGHT);
    return [{ ...box, ...pos }];
  });
  const [selectedId, setSelectedId] = useState<string | null>(() => textBoxes[0]?.id ?? null);
  const [exportPadding, setExportPadding] = useState(40);
  const [localFonts, setLocalFonts] = useState<string[]>([]);
  const downloadRef = useRef<() => void>(() => {});
  const dragIndexRef = useRef<number | null>(null);

  const selectedBox = textBoxes.find(b => b.id === selectedId) ?? null;

  const addBox = useCallback(() => {
    const box = createDefaultBox();
    const pos = getCenteredPosition(box, CANVAS_WIDTH, CANVAS_HEIGHT);
    const centered = { ...box, ...pos };
    setTextBoxes(prev => [...prev, centered]);
    setSelectedId(centered.id);
  }, []);

  const reorderBoxes = useCallback((from: number, to: number) => {
    setTextBoxes(prev => {
      const next = [...prev];
      const [removed] = next.splice(from, 1);
      next.splice(to, 0, removed);
      return next;
    });
  }, []);

  const deleteBox = useCallback((id: string) => {
    setTextBoxes(prev => {
      const next = prev.filter(b => b.id !== id);
      return next;
    });
    setSelectedId(prev => (prev === id ? null : prev));
  }, []);

  const updateBox = useCallback((id: string, updates: Partial<TextBox>) => {
    setTextBoxes(prev => prev.map(b => (b.id === id ? { ...b, ...updates } : b)));
  }, []);

  const moveBox = useCallback((id: string, x: number, y: number) => {
    setTextBoxes(prev => prev.map(b => (b.id === id ? { ...b, x, y } : b)));
  }, []);

  const alignBox = useCallback((id: string, alignH: AlignH | null, alignV: AlignV | null) => {
    setTextBoxes(prev => prev.map(b => {
      if (b.id !== id) return b;
      const pos = getAlignedPosition(b, CANVAS_WIDTH, CANVAS_HEIGHT, alignH, alignV);
      return { ...b, ...pos };
    }));
  }, []);

  const addLocalFont = useCallback((name: string) => {
    setLocalFonts(prev => (prev.includes(name) ? prev : [...prev, name]));
  }, []);

  return (
    <div className="app">
      {/* 左パネル */}
      <aside className="side-panel">
        <header className="panel-header">
          <h1 className="app-title">文字メーカー</h1>
          <button className="btn-accent" type="button" onClick={addBox}>
            + テキスト追加
          </button>
        </header>

        {/* テキストボックス一覧 */}
        {textBoxes.length > 0 && (
          <ul className="box-list">
            {textBoxes.map((box, index) => (
              <li
                key={box.id}
                className={`box-item ${box.id === selectedId ? 'selected' : ''}`}
                draggable
                onDragStart={() => { dragIndexRef.current = index; }}
                onDragOver={e => {
                  e.preventDefault();
                  e.currentTarget.classList.add('drag-over');
                }}
                onDragLeave={e => { e.currentTarget.classList.remove('drag-over'); }}
                onDrop={e => {
                  e.currentTarget.classList.remove('drag-over');
                  if (dragIndexRef.current !== null && dragIndexRef.current !== index) {
                    reorderBoxes(dragIndexRef.current, index);
                  }
                  dragIndexRef.current = null;
                }}
                onDragEnd={() => {
                  dragIndexRef.current = null;
                  document.querySelectorAll('.box-item').forEach(el => el.classList.remove('drag-over'));
                }}
                onClick={() => setSelectedId(box.id)}
                role="listitem"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedId(box.id)}
              >
                <span className="drag-handle" aria-hidden="true">⠿</span>
                <span className="box-item-text">{box.text.split('\n')[0].slice(0, 20) || '（空）'}</span>
                <button
                  className="box-item-delete"
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    deleteBox(box.id);
                  }}
                  aria-label="削除"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* テキスト設定パネル */}
        <div className="panel-scroll">
          {selectedBox ? (
            <TextPanel
              box={selectedBox}
              onChange={updates => updateBox(selectedBox.id, updates)}
              onDelete={() => deleteBox(selectedBox.id)}
              onAlign={(alignH, alignV) => alignBox(selectedBox.id, alignH, alignV)}
              localFonts={localFonts}
              onLocalFontAdd={addLocalFont}
            />
          ) : (
            <p className="empty-hint">テキストを選択するか<br />「＋ テキスト追加」で追加</p>
          )}
        </div>

        {/* エクスポート設定 */}
        <div className="export-section">
          <div className="row-control">
            <label>書き出し余白</label>
            <input
              type="range"
              min={0}
              max={120}
              value={exportPadding}
              onChange={e => setExportPadding(parseInt(e.target.value))}
            />
            <span className="value-display">{exportPadding}px</span>
          </div>
          <button
            className="btn-accent btn-block"
            type="button"
            onClick={() => downloadRef.current()}
            disabled={textBoxes.length === 0}
          >
            透過 PNG でダウンロード
          </button>
        </div>
      </aside>

      {/* キャンバスエリア */}
      <main className="canvas-area">
        <CanvasPreview
          textBoxes={textBoxes}
          selectedId={selectedId}
          padding={exportPadding}
          onSelect={setSelectedId}
          onMove={moveBox}
          downloadRef={downloadRef}
        />
      </main>
    </div>
  );
}
