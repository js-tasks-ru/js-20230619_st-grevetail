/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let result = new Array();
  arr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {usage: 'sort', sensitivity: 'variant', caseFirst: 'upper', localeMatcher: 'best fit' }));
  for (let value of arr) {
    result.push(value);
  }
  if (param === 'asc') {
    return result;
  } else {
    return result.reverse();
  }
}