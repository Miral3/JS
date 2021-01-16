function solution(arr) {
    var answer = [];
    var min = Math.min.apply(null,arr);
    var index = arr.indexOf(min);
   
    if(arr.length === 1) {
        return [-1];
    }

    answer = arr.splice(index, 1);
    
    return arr;
}
