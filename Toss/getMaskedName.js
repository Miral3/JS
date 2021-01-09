function getMaskedName(name) {
    var len = name.length-2;
    var answer = name.substring(0,2);
    for(var i = 0; i < len; i++) {
        answer += '*';
    }
    return answer;
}    
