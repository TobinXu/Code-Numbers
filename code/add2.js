function addCount(){
    var count =2;
    return function(){
        count+=2;
        console.log(count);
    }
}
var add2=addCount();
add2();//4
add2();//6

var add3=addCount();
add3();//4