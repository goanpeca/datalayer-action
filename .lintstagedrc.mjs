export default {
  '*.{ts,tsx,js,cjs,mjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,jsonc,md,yml,yaml,css}': ['prettier --write'],
  // Type-check the whole project when any TypeScript file is staged.
  '*.{ts,tsx}': () => 'npm run type-check',
};
