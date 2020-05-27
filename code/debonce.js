$('textarea').on('keydown',debounce(ajaxAction),2500);

function debounce(fn,delay){
    var timer = null;
    return function() {
        var context = this;
        var args =arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
}


//将输入的字符变成大写
document.getElementById('input-box').onkeypress = function() {
    var self = this;
    setTimeout(function() {
        self.value = self.value.toUpperCase();
    }, 0);
}