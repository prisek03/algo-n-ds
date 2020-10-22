let reverseArray = (arr, k) => {
    let len = arr.length;
    let end = k-1, dist = Math.floor(k / 2) - (1 - (k%2));
    if (end >= len) {
        end = len-1;
    }
    for (let start = 0; start < len; start++) {
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        } else {
            start += dist;
            end = start + (k - 1);
            if (end >= len) {
                end = len-1;
            }
        }
        end--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6], 3));