function solution(n) {
    var cnt = 0;
    
    for(let i = 1; i <= n; i++) {
        let sum = i;
        for(let j = i+1; j <= n+1; j++) {
            if(sum >= n) {
                if(sum === n) {
                    cnt++;
                    break;
                }
                break;
            }
            sum += j;
        }
    }
    
    return cnt;
}
