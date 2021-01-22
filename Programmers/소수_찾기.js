function solution(n) {
    var arr = new Array(n).fill(1);
    
    for(let i = 2; i <= n; i++) {
        for(let j = 2; i*j <= n; j++) {
            if(arr[i*j-1] !== 0) {
                arr[i*j-1] = 0;    
            }
        }
    }
    
    arr.shift();
    arr = arr.filter(function (x) {
        return x !== 0;
    });
    return arr.length;
}
