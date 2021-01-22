function solution(arr, divisor) {
    var answer = arr.filter(arr => arr%divisor == 0);
    if(!answer.length) {
        answer.push(-1);
    }

    return answer.sort((a,b) => a-b);
}
