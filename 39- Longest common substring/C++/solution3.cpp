// By using dynamic programming:

// Time complexity: O(nm)
// Space complexity: O(nm)

int lcs(string str1, string str2){
  int n = str1.length();
  int m = str2.length();
  int dp[n+1][m+1];
  for(int i = 0; i < n; i++) dp[i][0] = 0;
  for(int i = 0; i < m; i++) dp[0][i] = 0;
  int maxLength = 0;
  for(int i = 1; i < n+1; i++){
    for(int j = 1; j < m+1; j++){
      if(str1[i-1] == str2[j-1]){
        dp[i][j] = 1 + dp[i-1][j-1];
        maxLength = max(maxLength, dp[i][j]);
      }else{
        dp[i][j] = 0;
      } 
    }
  }
  return maxLength;
}


