function solution(a, b) {
    var answer = '';
    var weekday=new Array(7);
    weekday[0]="SUN";
    weekday[1]="MON";    
    weekday[2]="TUE";
    weekday[3]="WED";
    weekday[4]="THU";
    weekday[5]="FRI";
    weekday[6]="SAT";
    var _date = new Date(2016, a-1, b);
    answer = weekday[Date.getDay()];
    return answer;
}
