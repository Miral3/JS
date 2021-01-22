function solution(strings, n) {
    var answer = [];
    answer = strings.sort(function(a,b) {
        if(a.charAt(n) < b.charAt(n)) {
            return -1;
        }
        if(a.charAt(n) > b.charAt(n)) {
            return 1;
        }
        if(a.charAt(n) === b.charAt(n)) {
            if(a < b) {
                return -1;
            }
            if(a > b) {
                return 1;
            }
        }
    });
    return answer;
}
