// Brute force solution:

// Time complexity: O(mn³)
// Space complexity: O(1)

function lcs(str1, str2){
  let maxLen = 0;
  for(i = 0; i < str1.length; i++){
    for(j = i+1; j < str1.length+1; j++){
      if(str2.includes(str1.substring(i, j)))
        maxLen = Math.max(maxLen, j-i);
    }
  }
  return maxLen;
}


