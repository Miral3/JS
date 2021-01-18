function solution(n, lost, reserve) {
    
    var arr = new Array(n+1).fill(1,1);
    
    for(let i = 1; i <= n; i++){
        if(lost.includes(i)) {
            arr[i]--;
        }
        if(reserve.includes(i)) {
            arr[i]++;
        }
    }
    for(let j = 1; j <= n; j++){
        if(arr[j] === 0) {
            if(arr[j-1] === 2) {
                arr[j-1]--;
                arr[j]++;
            }
            else if(arr[j+1] === 2) {
                arr[j+1]--;
                arr[j]++;
            }
        }
    }
    
    return arr.filter(x => x !== 0).length;
}
