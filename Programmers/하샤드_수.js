function solution(x) {
    let sum = x.toString().split('').map(Number).reduce((a,b)=> a+b);

    return x%sum === 0 ? true : false;
}
