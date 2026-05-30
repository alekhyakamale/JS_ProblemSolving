function countingValleys(steps){
    let level = 0;
    let valleys = 0;

    for(let i=0; i<steps.length; i++){
        if(steps.length === 0 || !steps) return;
        if(steps[i] === 'U') level++;
        else level--;
        if(level === 0 && steps[i] === 'U') valleys++;
    }
    return valleys;
}

console.log(countingValleys('DDUUDDUDUUUD'))