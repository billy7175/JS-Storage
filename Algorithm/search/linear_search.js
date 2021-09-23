function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

// 배열을 넣고 VAL을 통해 값이 있는지 확인
linearSearch([34,51,1,2,3,45,56,687], 100)