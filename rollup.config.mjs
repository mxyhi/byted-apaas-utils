import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import rollupJson from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export default defineConfig(async () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.resolve('./package.json'), 'utf-8')
  );

  const pkgName = packageJson.name;

  /**
   *
   * @returns {import("rollup").Plugin}
   */
  const logGlobalVariablePlugin = () => {
    return {
      name: 'logGlobalVariablePlugin',
      closeBundle() {
        console.log(
          '\n',
          chalk.yellowBright('  globals variable name:'),
          chalk.blueBright(pkgName),
          '\n'
        );
      },
    };
  };
  const compressPlugin = terser();
  const input = 'src/index.ts';
  const external = ['axios', 'crypto-js'];
  const umdConfig = {
    format: 'umd',
    name: pkgName,
    dir: 'dist',
    exports: 'named',
  };

  /** @type {import("rollup").Plugin[]} */
  const plugins = [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    rollupJson(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.es6', '.mjs', '.ts'],
    }),
    logGlobalVariablePlugin(),
  ];
  return [
    {
      input,
      plugins,
      external,
      treeshake: false,
      output: [
        {
          format: 'cjs',
          dir: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          esModule: true,
          exports: 'named',
          plugins: [compressPlugin],
        },
        {
          format: 'esm',
          dir: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          esModule: true,
          exports: 'named',
          plugins: [compressPlugin],
        },
        {
          ...umdConfig,
          entryFileNames: `${pkgName}.js`,
        },
        {
          ...umdConfig,
          entryFileNames: `${pkgName}.min.js`,
          plugins: [compressPlugin],
        },
        {
          ...umdConfig,
          entryFileNames: 'index.js',
        },
        {
          ...umdConfig,
          entryFileNames: 'index.min.js',
          plugins: [compressPlugin],
        },
      ],
      watch: {
        include: 'src/**',
      },
    },
  ];
});
