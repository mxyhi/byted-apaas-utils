import { defineConfig } from 'tsup';

export default defineConfig(() => {
  const baseConfig = defineConfig({
    entry: ['./src/**/*.ts'],
    clean: true,
    format: ['cjs'],
    outDir: 'cjs',
    dts: true,
    bundle: false,
    minify: true,
    target: 'es2020',
    tsconfig: './tsconfig.build.json',
  });

  return [
    // cjs
    { ...baseConfig },
    // esm
    {
      ...baseConfig,
      format: ['esm'],
      outDir: 'esm',
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
      outDir: 'esm',
      dts: {
        only: true,
      },
    },
    // umd
    {
      ...baseConfig,
      entry: ['./src/index.ts'],
      bundle: true,
      dts: false,
      format: ['iife'],
      outDir: 'dist',
      globalName: 'bytedApaasUtils',
    },
  ];
});
