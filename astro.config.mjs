import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aviator-uzbek.online',
  trailingSlash: 'always', // Принудительно генерирует URL со слэшем на конце
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/go/') && !page.includes('/download/'), // Исключаем служебные партнерские редиректы
    }),
  ],
});
