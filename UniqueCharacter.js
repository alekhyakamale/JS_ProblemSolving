//Given a string, find the first character that appears only once and return its index. If none exists, return -1.

function UniqueCharacter(str){
    const count = {};
    for(let char of str) count[char] = (count[char] || 0) + 1;
    for(let i = 0; i < str.length; i++){
        if(count[str[i]] === 1) return i;
    }
    return -1;
}

const str = 'loveable';

console.log(UniqueCharacter(str));