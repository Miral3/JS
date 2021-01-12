function solution(s) {
    var answer = '';
    var len = s.length;
    var half = len/2;
    
    if(half % 1 === 0) {
        answer = s.substring(half-1, half+1);
    }
    else {
        half = parseInt(half);
        answer = s.substring(half, half+1);
    }
    return answer;
}
