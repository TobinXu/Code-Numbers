function compare(v1,v2){
    if(v1>v2){
        return 1;
    } else if(v1<v2){
        return -1;
    } else {
        return 0;
    }
}

var nums=[4,3,5,1,2];
nums.sort(compare);
console.log(nums);


