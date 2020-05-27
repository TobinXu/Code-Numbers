//更进一步思考这个问题发现，我们求一个数字是否为质数，判断它的因数都是成对出现的
//比如100的因数，1/100,2/50,4/25,5,20。注意每一对数字中都有一个是小于Math.sqrt(100)的
//所以我们只用判断，一个数字x是否能把2到Math.sqrt(x)之前的数字整数
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