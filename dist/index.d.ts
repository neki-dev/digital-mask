/**
 * Apply digital mask to string
 *
 * @param {string} source - Unformatted string
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {string}
 */
declare function applyStringMask(source: string, format: string, def?: string): string;
/**
 * Apply digital mask to input
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 */
declare function applyInputMask(input: HTMLInputElement, format: string, def?: string): void;
/**
 * Bind input event and apply digital mask
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {function}
 */
declare function bindInputMask(input: HTMLInputElement, format: string, def?: string): () => void;
declare const _default: {
    applyStringMask: typeof applyStringMask;
    applyInputMask: typeof applyInputMask;
    bindInputMask: typeof bindInputMask;
};
export = _default;
