function grow(arr){
    let result = arr[0];
    for(let i=1;i<arr.length;i++){
        result *= arr[i];
    }
    return result;
}

console.log(grow([1,2,3,4,5,]))