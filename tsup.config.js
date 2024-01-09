import path from 'path';
import { defineConfig } from 'tsup';

export default defineConfig(() => {
  const resolve = (...paths) => path.resolve(__dirname, ...paths);
  const baseConfig = defineConfig({
    entry: [resolve('./packages/lib/src/**/*.ts')],
    clean: true,
    format: ['cjs'],
    outDir: resolve('./packages/lib/cjs'),
    dts: true,
    bundle: false,
    minify: true,
    target: 'es2018',
    tsconfig: resolve('./packages/lib/tsconfig.build.json'),
  });

  return [
    // cjs
    { ...baseConfig },
    // esm
    {
      ...baseConfig,
      format: ['esm'],
      outDir: resolve('./packages/lib/esm'),
      dts: false,
      outExtension() {
        return {
          js: '.js',
        };
      },
    },
    // dts
    {
      ...baseConfig,
      format: ['cjs'],
      outDir: resolve('./packages/lib/esm'),
      dts: {
        only: true,
      },
    },
    // umd
    {
      ...baseConfig,
      entry: [resolve('./packages/lib/src/index.ts')],
      bundle: true,
      dts: false,
      format: ['iife'],
      outDir: resolve('./packages/lib/dist'),
      globalName: 'bytedApaasUtils',
    },
  ];
});
