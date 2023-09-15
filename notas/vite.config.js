import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'; // Importe a função resolve do módulo path

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // Use a função resolve para construir o caminho absoluto
      },
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from 'react'`,
  },
});
