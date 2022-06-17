// Brute force solution:

// Time complexity: O(mn³)
// Space complexity: O(1)

static int lcs(String str1, String str2){
  int maxLen = 0;
  for(int i = 0; i < str1.length(); i++){
    for(int j = i+1; j < str1.length()+1; j++){
      if(str2.contains(str1.substring(i, j)))
        maxLen = Math.max(maxLen, j-i);
    }
  }
  return maxLen;
}


