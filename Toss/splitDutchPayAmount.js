function splitDutchPayAmount(peopleCount, amount) {
    var answer = new Array();
    var dutch = parseInt(amount/peopleCount);
    var rest = parseInt(amount%peopleCount);

    for(var i = 0; i < peopleCount; i++) {
        if(i == 0) {
            answer.push(dutch + rest);
        }
        else {
            answer.push(dutch);
        }
    }
    return answer;
}
