const arr = [6, 5, 7, 9, 2, 2];

function MinCandyCost(arr) {
    arr.sort((a, b) => b - a);
    let totalCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 3 !== 0) {
            totalCount += arr[i];
        }
    }
    return totalCount;
}

console.log(MinCandyCost(arr));