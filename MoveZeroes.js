function moveZeroes(arr){
    let i=0;
    let j=arr.length-1;
    let temp;
    while(i<j){
        if(arr[i] === 0){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[j]=temp;
            console.log(arr, "arr", i)
        }
        if(arr[i+1] !== 0){
            i++;
            j--;
        } else {
            j--;
        }
    }
    return arr
}

console.log(moveZeroes([0, 1, 0, 3, 12]))