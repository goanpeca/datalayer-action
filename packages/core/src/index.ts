/*
 * Copyright (c) 2026 Datalayer, Inc.
 * Distributed under the terms of the Modified BSD License.
 */

/**
 * `@datalayer/action-core` — shared building blocks for the Datalayer GitHub
 * Actions suite (client factory, IO, masking, retry, summaries).
 *
 * This is the initial seed; the full client factory and helpers are tracked in
 * issue #14 and land alongside the action implementations.
 */

/** Version of the shared core package. */
export const VERSION = '0.1.0';

/**
 * Resolve the Datalayer API token from an explicit value or the standard
 * environment variables (`DATALAYER_API_KEY`, then `DATALAYER_TOKEN`), in
 * priority order.
 *
 * @param explicit - Token provided directly (e.g. from an action input).
 * @returns The trimmed, non-empty token, or `undefined` if none is set.
 */
export function resolveToken(explicit?: string): string | undefined {
  const candidates = [
    explicit,
    process.env['DATALAYER_API_KEY'],
    process.env['DATALAYER_TOKEN'],
  ];
  for (const candidate of candidates) {
    const trimmed = candidate?.trim();
    if (trimmed) {
      return trimmed;
    }
  }
  return undefined;
}
