function solution(n) {
    let answer = '';
    let quo = n;
    let remain = 0;
    let arr = [4,1,2];
    
    while(quo > 0) {
        remain = quo % 3;
        quo = parseInt(quo/3);
        answer += arr[remain];
        
        if(remain === 0) {
            quo --;
        }
        answer += arr[remain]; 
    }
    
    return answer.split('').reverse().join('');
}
