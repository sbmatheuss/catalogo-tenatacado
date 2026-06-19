import { useState, useEffect } from 'react';

const STORAGE_KEY = 'unsplash_cache';

const cache = new Map<string, string | null>();
const pending = new Set<string>();

function loadStorageCache(): void {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    for (const [k, v] of Object.entries(stored)) {
      cache.set(k, v as string | null);
    }
  } catch {}
}

function saveToStorage(key: string, value: string | null): void {
  cache.set(key, value);
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    stored[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {}
}

loadStorageCache();

export function useProductImage(productName: string, brand: string): string | null {
  const [url, setUrl] = useState<string | null>(cache.get(productName) ?? null);

  useEffect(() => {
    if (cache.has(productName) || pending.has(productName)) return;

    const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;
    if (!key) return;

    pending.add(productName);
    const query = encodeURIComponent(`${brand} ${productName}`);

    fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${key}`)
      .then(r => r.json())
      .then(data => {
        const imageUrl: string | null = data.results?.[0]?.urls?.small ?? null;
        if (imageUrl) saveToStorage(productName, imageUrl);
        else cache.set(productName, null);
        setUrl(imageUrl);
      })
      .catch(() => {
        cache.set(productName, null);
      })
      .finally(() => {
        pending.delete(productName);
      });
  }, [productName, brand]);

  return url;
}
