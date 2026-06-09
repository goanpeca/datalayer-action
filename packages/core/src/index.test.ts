/*
 * Copyright (c) 2026 Datalayer, Inc.
 * Distributed under the terms of the Modified BSD License.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';

import { resolveToken, VERSION } from './index.js';

describe('resolveToken', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('prefers and trims an explicit token', () => {
    vi.stubEnv('DATALAYER_API_KEY', undefined);
    vi.stubEnv('DATALAYER_TOKEN', undefined);
    expect(resolveToken('  abc  ')).toBe('abc');
  });

  it('falls back to DATALAYER_API_KEY', () => {
    vi.stubEnv('DATALAYER_API_KEY', 'key-123');
    vi.stubEnv('DATALAYER_TOKEN', undefined);
    expect(resolveToken()).toBe('key-123');
  });

  it('falls back to DATALAYER_TOKEN when the API key is absent', () => {
    vi.stubEnv('DATALAYER_API_KEY', undefined);
    vi.stubEnv('DATALAYER_TOKEN', 'tok-456');
    expect(resolveToken()).toBe('tok-456');
  });

  it('returns undefined when no token is available', () => {
    vi.stubEnv('DATALAYER_API_KEY', undefined);
    vi.stubEnv('DATALAYER_TOKEN', undefined);
    expect(resolveToken()).toBeUndefined();
    expect(resolveToken('   ')).toBeUndefined();
  });
});

describe('VERSION', () => {
  it('is a semver string', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });
});
