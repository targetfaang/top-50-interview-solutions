// Brute force solution:

// Time complexity: O(mn³)
// Space complexity: O(1)


int lcs(string str1, string str2){
  int maxLen = 0;
  for(int i = 0; i < str1.length(); i++){
    for(int j = i+1; j < str1.length()+1; j++){
      if(str2.find(str1.substr(i, j-i)) != string::npos)
        maxLen = max(maxLen, j-i);
    }
  }
  return maxLen;
}


