/**
 * Apply digital mask to string
 *
 * @param {string} source - String
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 *
 * @returns {string}
 */
export declare function applyStringMask(source: string, format: string, def?: string): string;
/**
 * Apply digital mask to input
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 */
export declare function applyInputMask(input: HTMLInputElement, format: string, def?: string): void;
