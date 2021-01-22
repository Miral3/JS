function solution(x, n) {
    var answer = new Array(n).fill(1);
//     for(let i = 0; i < n; i++) {
//         answer[i] = (i+1) * x;
//     }
    
    return answer.map((v,i) => (i+1)*x);
}
