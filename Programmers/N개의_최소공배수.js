function solution(arr) {
    var answer = 0;
    
    arr.sort((a,b)=>a-b);
    
    function GCD(n, m) {
        if(n === 0) {
            return m;
        }
        return GCD(m%n, n);
    }
    
    function LCM(n, m) {
        return (n * m) / GCD(n, m);
    }
    
    // for(let i = 0; i < arr.length-1; i++) {
    //     let ans = LCM(arr[i], arr[i+1]);
    //     arr[i+1] = ans;
    // }
    
    return arr.reduce((a,c)=> LCM(a,c));
}
