/**
 * Created by azad on 9/5/16.
 */

function limiter(limit) {
    
    return function (item) {
        return item > limit;
    };
    
}

arr = [1,3,4]

lim = limiter(1);

console.log(arr.map(lim));