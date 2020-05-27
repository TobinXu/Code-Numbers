function pop_sort(){
    var arr=[1,4,2,6,9,8];
    var flag=1;
    var position=0;
    var len=arr.length-1;
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<len;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=0;  
                position=j;     
            }
        }
        len=position;
        if(flag==1){
            break;
        }
    } 
   console.log(arr);
}
pop_sort();