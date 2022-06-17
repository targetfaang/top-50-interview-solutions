// By using dynamic programming:

// Time complexity: O(nm)
// Space complexity: O(nm)

function lcs(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let dp = [...Array(n+1)].map(row => [...Array(m+1)].map(x => 0));
  let maxLength = 0;
  for(let i = 1; i < n+1; i++){
    for(let j = 1; j < m+1; j++){
      if(str1[i-1] == str2[j-1]){
        dp[i][j] = 1 + dp[i-1][j-1];
        maxLength = Math.max(maxLength, dp[i][j]);
      }else{
        dp[i][j] = 0;
      } 
    }
  }
  return maxLength;
}


