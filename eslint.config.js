// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

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
  {
    languageOptions: {
      parserOptions: {
        // Type-aware linting without enumerating each tsconfig (TS-ESLint v8+).
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
    },
  },
  {
    // JS and root config files are not part of a tsconfig project: no type-aware rules.
    files: ['**/*.{js,cjs,mjs}', '**/*.config.ts'],
    ...tseslint.configs.disableTypeChecked,
  },
  // Keep ESLint out of Prettier's lane (must be last).
  prettier,
);
