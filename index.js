/**
 * Adding mask to string
 *
 * @param {string} source - String
 * @param {string} format - Mask format
 * @param {string} [def] - Char for empty
 *
 * @returns {string}
 */
module.exports = (source, format, def = '_') => {

    let result = source.replace(/\D+/g, '');
    for (let i = 0; i < format.length; i++) {
        if (result[i] === undefined || (format[i] !== def && format[i] !== result[i])) {
            result = result.substr(0, i) + format[i] + result.substr(i);
        }
    }
    result = result.substr(0, format.length);

    return result;

};