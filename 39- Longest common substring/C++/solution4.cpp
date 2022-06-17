// By using a suffix tree:

// Time complexity: O(n + m)
// Space complexity: O((n+m)²)

int getLcsFromSuffixTree(SuffixTree suffixTree){
  if(!suffixTree.hasSuffixFromStr1 || !suffixTree.hasSuffixFromStr2){
    return 0;
  }else{
    int maxFromChild = 0;
    for(SuffixTree child : suffixTree.children){
      maxFromChild = max(maxFromChild, getLcsFromSuffixTree(child));
    }
    return suffixTree.text.length() + maxFromChild;
  }
}

int lcs(string str1, string str2){
  string concatenation = str1 + '*' + str2 + '$';
  SuffixTree suffixTree = newSuffixTree(concatenation);
  return getLcsFromSuffixTree(suffixTree);
}


