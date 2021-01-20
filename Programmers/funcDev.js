function solution(progresses, speeds) {
    var answer = [0];
    let work = [];
    
    for(let i = 0; i < progresses.length; i++) {
        work[i] = (100 - progresses[i]) / speeds[i];
        if(!Number.isInteger(work[i])) {
            work[i] = parseInt(work[i]) + 1;
        }
    }
    
    let max = work[0];
    let index = 0;
    for(let j = 0; j < work.length; j++) {
        if(max >= work[j]) {
            answer[index] ++;
        }
        else {
            max = work[j];
            answer[++index] = 1;
        }
    }
    
    return answer;
}
