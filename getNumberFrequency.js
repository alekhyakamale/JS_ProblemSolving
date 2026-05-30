// function MaxConsistentNestedArray(arr){

// }

// console.log([1,1,1,[2,2,[3,[4,4,4,4,[5,5]]]]]);

function getNumberFrequency(arr, freqMap = {}) { // Define the function taking the array, and initialize an empty object 'freqMap' as a default parameter to store our counts across all recursive calls.
  for (const item of arr) { // Iterate through every single element in the current level of the array.
    if (Array.isArray(item)) { // Check if the current item is itself an array, which tells us we need to go deeper.
      getNumberFrequency(item, freqMap); // If it is an array, call this exact same function again (recursion), passing the nested array and our shared freqMap so it keeps adding to the same object.
    } else if (typeof item === 'number') { // If it's not an array, check if it's specifically a number (ignoring strings, nulls, etc., if mixed data exists).
      freqMap[item] = (freqMap[item] || 0) + 1; // Look up the current count for this number (falling back to 0 if we haven't seen it yet), add 1 to it, and assign it back to the map.
    } // End of the type-checking logic.
  } // End of the loop for this current array level.
  
  return freqMap; // Return the fully populated object. (Note: during inner recursive calls, this return is ignored, but it returns the final answer to the original caller).
} // End of the function.

console.log(getNumberFrequency([1,1,1,[2,2,[3,[4,4,4,4,[5,5]]]]]));