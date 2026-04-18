//Given a string of brackets, return true if every opening bracket has a matching closing bracket in the correct order.

function isValid(str){
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];
    for(let char of str){
        if(pairs[char]) stack.push(char);
        else{
            const last = stack.pop();
            if(pairs[last] !== char) return false;
        }
    }
    return stack.length === 0;
}

const str = '({})';

console.log(isValid(str));