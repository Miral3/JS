function solution(land) {
    const len = land.length;
    let firstMax = 0;
    let secondMax = 0;
    let index = 0;
    let arr = [];
    
    for(let i = 0; i < len-1; i++) {
        arr = land[i];
        firstMax = arr.reduce((a,b) => Math.max(a,b));
        index = arr.indexOf(firstMax);
        arr.splice(index,1);
        secondMax = arr.reduce((a,b) => Math.max(a,b));
        
        land[i+1] = land[i+1].map((v,i)=>{
        if(i !== index) { 
            return v + firstMax
        }
        else {
            return v + secondMax
        }});
    }

    return Math.max.apply(null, land[len-1]);
}
