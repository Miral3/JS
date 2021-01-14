function solution(s) {
    var answer = '';
    s = s.split(' ');
    const Upper = /[A-Z]/;
    const Lower = /[a-z]/;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
            if(((j%2) !== 0)) {
                if(Upper.test(s[i].charAt(j))){
                    answer += s[i].charAt(j).toLowerCase();
                }
                else {
                    answer += s[i].charAt(j);
                }
            }
            else if(((j%2) === 0)) {
                if(Lower.test(s[i].charAt(j))){
                    answer += s[i].charAt(j).toUpperCase();
                }
                else {
                    answer += s[i].charAt(j);
                }
            }
        }
        if(i < s.length-1)
            answer += ' ';
    }
    return answer;
}
/*
function solution(s) {
    return s.split(' ').map((w) => (
        w.split('').map((v, i) => 
        (i%2 ? v.toLowerCase() : v.toUpperCase())).join(''))).join(' ');
}
*/
