/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    const set = new Set(arr), result = [];
    for (let value of set) result.push(value);
    return result;
}
