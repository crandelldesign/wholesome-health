import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dns from 'dns';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';

dns.setDefaultResultOrder('verbatim');
let svgPrefixCounter = 0;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // viewBox is required to resize SVGs with CSS.
                removeViewBox: false,
              },
            },
          },

          // Prefix IDs in the SVG to avoid conflicts
          {
            name: 'prefixIds',
            params: {
              prefix: ({ name }) => {
                if (name === 'svg') svgPrefixCounter += 1;
                return `svg-id-${svgPrefixCounter}`;
              },
              prefixClassNames: false,
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @use 'sass:list';
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_mixins.scss';
        `,
      },
    },
  },
});
