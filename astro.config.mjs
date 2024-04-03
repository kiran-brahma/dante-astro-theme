import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/posts/[...slug]': '/blog/[...slug]',
        '/personal-journal/[...slug]': '/journal/[...slug]',
        '/personal-journal': '/journal'
    },
    site: 'https://kiranbrahma.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
