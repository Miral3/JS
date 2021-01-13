function solution(s) {
    let answer = true;
    let pCnt = 0;
    let yCnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).toLowerCase() === 'p') {
            pCnt++;
        } else if (s.charAt(i).toLowerCase() === 'y') {
            yCnt++;
        }
    }
    if (pCnt !== yCnt) {
        answer = false;
    }
    return answer;
}
