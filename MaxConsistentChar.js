function getMaxConsistentChar(str) {
    let maxChar = str[0];
    let maxCount = 1;

    let currChar = str[0];
    let currCount = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currChar) {
            currCount++;
        } else {
            if (maxCount < currCount) {
                maxChar = currChar;
                maxCount = currCount;
            }
            currChar = str[i];
            currCount = 1;
        }
    }
    if (maxCount < currCount) {
        maxChar = currChar;
        maxCount = currCount;
    }
    return { char: maxChar, count: maxCount };
}

console.log(getMaxConsistentChar("aaaabbbccbbbbb"));