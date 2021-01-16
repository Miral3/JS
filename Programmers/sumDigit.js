function solution(n)
{
    return n.toString().split('').map(Number).reduce((i,j) => i+j, 0);
}
