function solution(arr1, arr2) {
    var arr = [];
    
    for(var i = 0; i < arr1.length; i++) {
        arr.push([]);
        for(var j = 0; j< arr2[0].length; j++) {
           arr[i].push(0);
        }
    }

    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2[0].length; j++) {
            for(var k = 0; k < arr1[0].length; k++) {
                arr[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return arr
}
