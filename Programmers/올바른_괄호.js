function solution(s){
    var answer = true;
    let cnt = 0;
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        
        if(ch === '(') {
            cnt++;
        }
        else {
            if(cnt === 0) {
                return false;
            }
            else {
                cnt--;
            }
        }
    }
    return cnt ? false : true;
}
