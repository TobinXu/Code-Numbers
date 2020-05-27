
function findSum(num,sum){
    var right=0;
    var left=0;
    for(let i=0; i<num.length;i++){
        right=i;
        left=i;
        var curSum=0;
        while(curSum<sum){
            curSum+=num[right++];
        }
        if(curSum==sum){
            for(let j=left; j<right; j++){
                console.log(num[j]);
            }
            console.log("\n");
        }
    }
}

var num=[1,2,2,3,4,5,6,7,8,9];
var sum=7;
findSum(num,sum);