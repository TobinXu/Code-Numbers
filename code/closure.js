function a(numberOne){
    var count=numberOne;
    return function b(numberTwo){
        if (numberTwo==undefined){
            return count;
        } else {
            count+=numberTwo;
            return b;
        }
    }
}
console.log(a(10)(12)());
