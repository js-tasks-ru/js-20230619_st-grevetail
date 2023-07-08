/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let arr = [],
        item = '';
    if(size == 0){
        return '';
    } else if(!size){
        return string;
    } else {
        for(let i = 0; i < string.length; i++){
            if(item.includes(string[i]) || i == 0){
                item += string[i];
            } else {
                if(item.length > size){
                    item = item.slice(0,size);
                }
                arr.push(item);
                item = string[i];
            }
            if (i == string.length - 1) {
                arr.push(item.slice(0,size));
            }
        }
        return arr.join('');
    }
}
