// By using dynamic programming:

// Time complexity: O(nm)
// Space complexity: O(nm)

static int lcs(String str1, String str2){
  int n = str1.length();
  int m = str2.length();
  int[][] dp = new int[n+1][m+1];
  int maxLength = 0;
  for(int i = 1; i < n+1; i++){
    for(int j = 1; j < m+1; j++){
      if(str1.charAt(i-1) == str2.charAt(j-1)){
        dp[i][j] = 1 + dp[i-1][j-1];
        maxLength = Math.max(maxLength, dp[i][j]);
      }else{
        dp[i][j] = 0;
      } 
    }
  }
  return maxLength;
}


