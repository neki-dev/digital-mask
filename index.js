/**
 * Adding mask to string
 *
 * @param {string} source - String
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 *
 * @returns {string}
 */
const formatMask = (source, format, def = '_') => {
    let result = source.replace(/\D+/g, '');
    for (let i = 0; i < format.length; i++) {
        if (result[i] === undefined || (format[i] !== def && format[i] !== result[i])) {
            result = result.substr(0, i) + format[i] + result.substr(i);
        }
    }
    result = result.substr(0, format.length);
    return result;
};

/**
 * Adding mask to input
 *
 * @param {string} source - Input
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 */
formatMask.to = (input, format, def) => {
    if (!input.value) {
        return;
    }
    input.value = formatMask(input.value, format, def);
    const end = input.value.search(/(\d)\D+$/) + 1;
    if (end > 0) {
        input.setSelectionRange(end, end);
    }
};

module.exports = formatMask;