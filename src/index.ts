/**
 * Apply digital mask to string
 *
 * @param {string} source - String
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 *
 * @returns {string}
 */
export function applyStringMask(source: string, format: string, def: string = '_'): string {
  let result = source.replace(/\D+/g, '');
  for (let i = 0; i < format.length; i += 1) {
    if (result[i] === undefined || (format[i] !== def && format[i] !== result[i])) {
      result = result.substr(0, i) + format[i] + result.substr(i);
    }
  }
  result = result.substr(0, format.length);
  return result;
}

/**
 * Apply digital mask to input
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 */
export function applyInputMask(input: HTMLInputElement, format: string, def: string = '_'): void {
  if (!input.value) {
    return;
  }
  // eslint-disable-next-line no-param-reassign
  input.value = applyStringMask(input.value, format, def);
  const end = input.value.search(/(\d)\D+$/) + 1;
  if (end > 0) {
    input.setSelectionRange(end, end);
  }
}
