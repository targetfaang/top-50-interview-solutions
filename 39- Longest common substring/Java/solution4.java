// By using a suffix tree:

// Time complexity: O(n + m)
// Space complexity: O((n+m)²)

static int getLcsFromSuffixTree(SuffixTree suffixTree){
  if(!suffixTree.hasSuffixFromStr1 || !suffixTree.hasSuffixFromStr2){
    return 0;
  }else{
    int maxFromChild = 0;
    for(SuffixTree child : suffixTree.children){
      maxFromChild = Math.max(maxFromChild, getLcsFromSuffixTree(child));
    }
    return suffixTree.text.length() + maxFromChild;
  }
}

static int lcs(String str1, String str2){
  String concatenation = str1 + '*' + str2 + '$';
  SuffixTree suffixTree = new SuffixTree(concatenation);
  return getLcsFromSuffixTree(suffixTree);
}


