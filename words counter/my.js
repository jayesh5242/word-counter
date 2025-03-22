function getwordCount(str) {
    let splited = str.trim().split(/\s+/);
    console.log(splited);
    if (splited == ' ') {
        return 0;
    }


    return splited.length;
}

function Counter(str) {
    let alphaCount = 0;
    let numberCount = 0;
    let charCounnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' && str[i] != '\n') {
            charCounnt++;
        }
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            alphaCount++;
        }
        else if
            (str[i] >= '0' && str[i] <= '9') {
            numberCount++;


        }

    }
    document.getElementById("chars").value = charCounnt;
    document.getElementById("num").value = numberCount;
    document.getElementById("alpha").value = alphaCount;
}






function wordCounter() {
    let inputText = document.getElementById("inputbox");
    let word = getwordCount(inputText.value);
    document.getElementById("words").value = word;
    Counter(inputText.value);
}