function quick_sort(s,l,r){
    var i=l;
    var j=r;
    var  key=s[i];
    if(l>=r){return;}
    while(i<j){
        while(i<j&&arr[j]>=key){
            j--;
        }
        if(i<j){
            s[i]=s[j];
        }
        while(i<j&&arr[i]<=key){
            i++;
        }
        if(i<j){
            s[j]=s[i];
        }
    }
    s[i]=key;
    quick_sort(arr,l,i-1);
    quick_sort(arr,i+1,r);

}

var arr=[6,3,8,7,9,1,3,5,3,8,2,9];
console.log(arr);
quick_sort(arr,0,arr.length-1);
console.log(arr);