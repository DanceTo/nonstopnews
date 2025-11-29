// app/sitemap.ts
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.nsnews-ru.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ru`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    // далі, коли будуть розділи/новини, просто додаєш сюди нові обʼєкти:
    // {
    //   url: `${BASE_URL}/ru/politics`,
    //   lastModified: now,
    //   changeFrequency: 'hourly',
    //   priority: 0.8,
    // },
  ];
}
