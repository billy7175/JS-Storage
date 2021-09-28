// Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//          } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//         console.log(start, middle, end)
//     }
    
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }


// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        console.log('before',start, middle, end)
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
        console.log('after',start, middle, end)
        
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([1,2,3,4,5,6,9,10,13,15,28,30], 28)
