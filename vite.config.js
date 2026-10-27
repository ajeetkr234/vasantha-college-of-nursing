import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'spa',
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          // Do not rewrite Vite internal requests or static assets
          if (
            !url.startsWith('/@') &&
            !url.startsWith('/src') &&
            !url.startsWith('/node_modules') &&
            !url.startsWith('/images') &&
            !pathExt(url) &&
            url !== '/'
          ) {
            req.url = '/index.html';
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: true,
    open: false
  }
});

function pathExt(p) {
  const lastDot = p.lastIndexOf('.');
  const lastSlash = p.lastIndexOf('/');
  return lastDot > lastSlash && lastDot !== -1;
}
