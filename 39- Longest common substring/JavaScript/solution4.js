// By using a suffix tree:

// Time complexity: O(n + m)
// Space complexity: O((n+m)²)

function getLcsFromSuffixTree(suffixTree){
  if(!suffixTree.hasSuffixFromStr1 || !suffixTree.hasSuffixFromStr2){
    return 0;
  }else{
    let maxFromChild = 0;
    for(let child of suffixTree.children){
      maxFromChild = Math.max(maxFromChild, getLcsFromSuffixTree(child));
    }
    return suffixTree.text.length + maxFromChild;
  }
}

function lcs(str1, str2){
  let concatenation = str1 + '*' + str2 + '$';
  let suffixTree = new SuffixTree(concatenation);
  return getLcsFromSuffixTree(suffixTree);
}


