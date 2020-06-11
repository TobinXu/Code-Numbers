function NumberFind(arr) {
    var len = arr.length;
    var res = -1;
    if (len > 1) {
        res = arr[0];
        for (let i = 1; i < len; i++) {
            res = res ^ arr[i];
        }
    }
    return res;
}

arr = [1,1,2,3,2,3,4,4,6,6,7];
console.log(NumberFind(arr));
