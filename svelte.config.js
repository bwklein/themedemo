import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import autoImport from 'vite-plugin-autoimport';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex(mdsvexConfig)
  ],
  kit: {
    adapter: adapter({
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
    }),
    vite: {
      define: {
        'process.env': {}
      },
      server: {
        hmr: {
          clientPort: process.env.HMR_HOST ? 443 : 24678,
          host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
        }
      },
      plugins: [
        autoImport({
          components: ['./src/lib/components'],
          include: ['**/*.svelte'],
          exclude: ['**/node_modules/**']
        })
      ]
    }
  }
};

export default config;
