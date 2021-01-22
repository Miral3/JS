function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++){
        let _char = s.charAt(i);
        let origin = s.charCodeAt(i);
        let sum = origin + n;
        
        const Upper = /[A-Z]/;
        const Lower = /[a-z]/;
        
        if(Upper.test(_char)) {
            if(sum > 90) {
                sum = (sum % 90) + 64;
            }
            answer += (String.fromCharCode(sum));
        }
        else if(Lower.test(_char)) {
            if(sum > 122) {
                sum = (sum % 122) + 96;
            }
            answer += (String.fromCharCode(sum));
        }
        else {
            answer += ' '
        }
    }
    return answer;
}
