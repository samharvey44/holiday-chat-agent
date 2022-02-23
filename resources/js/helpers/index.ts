/**
 * Generate a url from `path`.
 *
 * @param {string} path The path.
 *
 * @return {string}
 */
export const url = (path: string): string => `${window.location.origin}${path}`;

/**
 * Add either 'a' or 'an' before a string.
 *
 * @param {string} str The string.
 *
 * @return {string} The string with 'a' or 'an' added.
 */
export const getDeterminerForNoun = (str: string): string =>
    ['a', 'e', 'i', 'o', 'u'].includes(str[0].toLowerCase())
        ? `an ${str}`
        : `a ${str}`;
