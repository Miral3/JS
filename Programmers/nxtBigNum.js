function solution(n) {
    let cnt = n.toString(2).match(/1/g).length;

    for(let i = n+1; i < 1000000; i++) {
        let nxtNum = i.toString(2).match(/1/g).length;
        if(nxtNum === cnt) {
            return i;
        }
    }
    
}
