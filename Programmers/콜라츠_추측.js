function solution(num) {
    let cnt = 0;
    function collatz(num) {
        if(num === 1) {
            return cnt;
        }
        if(cnt === 500) {
            return -1;
        }
        if(num%2 === 0) {
            cnt++;
            return collatz(num/2);
        }
        else{
            cnt++;
            return collatz((num*3)+1);
        }
    }
    
    return collatz(num);
}
