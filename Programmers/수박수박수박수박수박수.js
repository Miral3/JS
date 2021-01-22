function solution(n) {
    var answer = new Array(n);
    for(let i = 0; i < n; i++) {
        if((i+1) % 2 === 0) {
            answer[i] = '박';
        }
        else{
            answer[i] = '수';
        }
    }
    
    return answer.join('');
}
