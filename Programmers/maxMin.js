function solution(s) {
    s = s.split(' ').map(Number);
    let max = Math.max.apply(null, s);
    let min = Math.min.apply(null, s);
    
    return min + ' ' + max;
}
