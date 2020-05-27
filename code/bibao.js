for(var i=0;i<4;i++){
    setTimeout(
        function(){
            var temp=i;
            return function(){
                console.log(temp);
            };
        }()
        ,300)
}