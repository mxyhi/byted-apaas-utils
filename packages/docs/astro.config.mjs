import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://mxyhi.github.io',
  base: '/byted-apaas-utils/',
  integrations: [
    starlight({
      locales: {
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      title: 'byted-apaas-utils',
      description: '飞书应用引擎apaas云函数常用工具',
      social: {
        github: 'https://github.com/mxyhi/byted-apaas-utils',
      },
      sidebar: [
        {
          label: '快速上手',
          autogenerate: { directory: 'guides' },
          // items: [
          // 	// Each item here is one entry in the navigation menu.
          // 	{ label: 'Example Guide', link: '/guides/example/' },
          // ],
        },
        {
          label: '使用参考',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
