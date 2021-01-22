function solution(s) {
    return s.split(' ').map(v => {
        return v.charAt(0).toUpperCase() + 
            v.substring(1).toLowerCase();
    }).join(' ');
}
