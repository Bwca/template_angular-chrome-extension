import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    background: 'src/extension-scripts/background.ts',
    content: 'src/extension-scripts/content.ts'
  },
  outDir: 'dist/template-angular-chrome-extension/browser',
  format: ['cjs'],
  target: 'esnext',
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: false,
});
