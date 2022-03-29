/**
 * Apply digital mask to string
 *
 * @param {string} source - Unformatted string
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {string}
 */
export declare function applyStringMask(source: string, format: string, def?: string): string;
/**
 * Apply digital mask to input
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 */
export declare function applyInputMask(input: HTMLInputElement, format: string, def?: string): void;
/**
 * Bind input event and apply digital mask
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {function}
 */
export declare function bindInputMask(input: HTMLInputElement, format: string, def?: string): () => void;
