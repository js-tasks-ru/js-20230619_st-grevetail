/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    if(typeof path === 'string'){
        var arr = path.split('.');
    }
    return function (path){
        if (path !== null && typeof path === 'object' && arr) {
            for(let i = 0; i < arr.length; i++){
                path = path[arr[i]];
                if(!path){
                    return undefined;
                }
            }
            arr.length = 0;
            return path; 
        }
    };   
}