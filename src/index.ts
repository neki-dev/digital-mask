/**
 * Apply digital mask to string
 *
 * @param {string} source - Unformatted string
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {string}
 */
function applyStringMask(source: string, format: string, def: string = '_'): string {
  let result = source.replace(/\D+/g, '');
  for (let i = 0; i < format.length; i += 1) {
    if (result[i] === undefined || (format[i] !== def && format[i] !== result[i])) {
      result = result.substring(0, i) + format[i] + result.substring(i);
    }
  }
  result = result.substring(0, format.length);

  return result;
}

/**
 * Apply digital mask to input
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 */
function applyInputMask(input: HTMLInputElement, format: string, def: string = '_') {
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

/**
 * Bind input event and apply digital mask
 *
 * @param {HTMLInputElement} input - Input
 * @param {string} format - Mask for format
 * @param {string} [def] - Сhar from replace
 *
 * @returns {function}
 */
function bindInputMask(input: HTMLInputElement, format: string, def: string = '_'): () => void {
  const handler = () => {
    applyInputMask(input, format, def);
  };

  input.addEventListener('input', handler);
  return () => {
    input.removeEventListener('input', handler);
  };
}

// export for commonjs
// @ts-ignore
export = {
  applyStringMask,
  applyInputMask,
  bindInputMask,
};
