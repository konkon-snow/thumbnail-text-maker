import { useCallback, useState } from 'react';

const STORAGE_KEY = 'ttm.recentPresets';
const MAX_RECENT = 6;

function loadStored(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is string => typeof v === 'string').slice(0, MAX_RECENT);
  } catch {
    return [];
  }
}

export function useRecentPresets(): {
  recentIds: string[];
  pushRecent: (id: string) => void;
} {
  const [recentIds, setRecentIds] = useState<string[]>(loadStored);

  const pushRecent = useCallback((id: string) => {
    setRecentIds(prev => {
      const next = [id, ...prev.filter(v => v !== id)].slice(0, MAX_RECENT);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // プライベートモード等で保存できなくても機能は継続する
      }
      return next;
    });
  }, []);

  return { recentIds, pushRecent };
}
