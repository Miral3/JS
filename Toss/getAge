function getAge(birthDate, nowDate) {
    var korAge;
    var nationalAge;
    var strbirthYear = birthDate.slice(0,4);
    var strnowYear = nowDate.slice(0,4);
    var strbirthMD = birthDate.slice(5,10).replace('-', '');
    var strnowMD = nowDate.slice(5,10).replace('-', '');
    
    korAge = strnowYear - strbirthYear + 1;
    if(strnowMD > strbirthMD) {
        nationalAge = korAge-1;
    }
    else {
        nationalAge = korAge-2;
    }
    return '만 ' + nationalAge + '세, 한국나이' + korAge + '세';
}
