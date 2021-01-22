function solution(n, m) {
    var answer = [];
     if(n>m) {
            [n,m] = [m,n];
        }
    function euclidean(n, m) {
        if(n === 0) {
            return m;
        }
        return euclidean(m%n,n);
    }
    answer[0] = euclidean(n,m);
    answer[1] = (n*m) / answer[0];
    return answer;
}
