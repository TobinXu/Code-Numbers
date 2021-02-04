function createArray(length:number, value:any):Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

function createArray1<T>(length:number, value:any): Array<T> {
    let res:T[] = [];
    for (let i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
}