/**
 * Generate a url from `path`.
 *
 * @param {string} path The path.
 *
 * @return {string}
 */
export const url = (path: string): string => `${window.location.origin}${path}`;
