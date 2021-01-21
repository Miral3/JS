function solution(A,B){
    var answer = [];
    const len = A.length;
    
    for(let i = 0; i < len; i++) {
        let min = Math.min.apply(null, A);
        let max = Math.max.apply(null, B);
        answer[i] = min*max;
        A.splice(A.indexOf(min),1);
        B.splice(B.indexOf(max),1);
    }
    return answer.reduce((a,b)=>a+b);
}
