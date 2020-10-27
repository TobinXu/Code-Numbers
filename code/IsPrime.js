//更进一步思考这个问题发现，我们求一个数字是否为质数，判断它的因数都是成对出现的
//比如100的因数，1/100,2/50,4/25,5,20。注意每一对数字中都有一个是小于Math.sqrt(100)的
//所以我们只用判断，一个数字x是否能把2到Math.sqrt(x)之前的数字整除
//如果可以就不是质数，这里只用更改一下内部判断条件
function IsPrime(N){
    var arr=[2,3];

    for(var i=4;i<N;i++){
        var flag=true;
        for(var j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                flag=false;
                break;
            }
        }
        if(flag){
            arr.push(i);
        }
    }
    console.log(arr);
    console.log(arr.length);
}

IsPrime(1000);

// 1.js弱类型默认不信任参数类型，需要做判断，typeof和Number.isInteger()
// 2.负数、0、1都不是质数，另外2是唯一的偶质数
// 3.如果一个数不能被5整除，那也不能被他的倍数整除如15、20等
// 4.因为因数都是成对出现的，如100的因数：1/100,2/50,4/25,5/20等，发现其中每对中都有一个小于100的开方，所以只需要判断数字的开方以内的数字即可
function IsPrime(Num) {
    if (typeof Num !== "number" || !Number.isInteger(Num)) return false;
    if (Num < 2) return false;
    if (Num === 2) {return true;}
    else if (Num % 2 === 0) return false;
    let NumSqr =Math.sqrt(Num)
    for (let i = 3; i < NumSqr; i+2) {
        if (NumSqr % i === 0) {
            return false;
        }
    }
    return true;
}
