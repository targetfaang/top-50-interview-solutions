// By using recursion:

// Time complexity: O(3^(n+m))
// Space complexity: O(n + m)

static int lcs(String str1, String str2, int i, int j){
  if(i == str1.length() || j == str2.length())
    return 0;
  else if(str1.charAt(i) == str2.charAt(j))
    return Math.max(1 + lcs(str1, str2, i+1, j+1), Math.max(lcs(str1, str2, i+1, j), lcs(str1, str2, i, j+1)));
  else
    return Math.max(lcs(str1, str2, i+1, j), lcs(str1, str2, i, j+1));
}

static int lcs(String str1, String str2){
  return lcs(str1, str2, 0, 0);
}


