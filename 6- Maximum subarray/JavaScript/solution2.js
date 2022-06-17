// Brute force solution (with cumulative sum):

// Time complexity: O(n²)
// Space complexity: O(1)

function maximumSubarray(arr){
  let maxSum = -Infinity;
  for(let i = 0; i < arr.length; i++){
    let cumulativeSum = 0;
    for(let j = i; j < arr.length; j++){
      cumulativeSum += arr[j];
      maxSum = Math.max(maxSum, cumulativeSum);
    }
  }
  return maxSum;
}


