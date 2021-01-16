function solution(n) {
    let answer = -1;
    let sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)) {
        answer = Math.pow((sqrt+1),2);
    }
    return answer;
}
