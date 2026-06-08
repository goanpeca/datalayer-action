import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    // Unit, integration, and contract specs all use the *.test.ts suffix; e2e
    // tests run separately via the action harness (#102).
    include: ['{packages,actions}/*/src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'lcov'],
      include: ['{packages,actions}/*/src/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.d.ts'],
      thresholds: {
        lines: 90,
        statements: 90,
        functions: 90,
        branches: 85,
      },
    },
  },
});
