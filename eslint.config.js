// @ts-check
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/lib/**',
      'coverage/**',
      'docs/api/**',
      '**/*.d.ts',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  promise.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        // Type-aware linting without enumerating each tsconfig (TS-ESLint v8+).
        projectService: true,
        tsconfigRootDir,
      },
    },
    plugins: { import: importPlugin },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    // Enforce valid TSDoc comment syntax on TypeScript sources.
    files: ['**/*.ts'],
    plugins: { tsdoc },
    rules: { 'tsdoc/syntax': 'error' },
  },
  {
    // JS and root config files are not part of a tsconfig project: no type-aware rules.
    files: ['**/*.{js,cjs,mjs}', '**/*.config.ts'],
    ...tseslint.configs.disableTypeChecked,
  },
  // Keep ESLint out of Prettier's lane (must be last).
  prettier,
);
