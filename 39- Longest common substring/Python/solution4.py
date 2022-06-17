# By using a suffix tree:

# Time complexity: O(n + m)
# Space complexity: O((n+m)²)

def getLcsFromSuffixTree(suffixTree):
  if not suffixTree.hasSuffixFromStr1 or not suffixTree.hasSuffixFromStr2:
    return 0
  else:
    maxFromChild = 0
    for child in suffixTree.children:
      maxFromChild = max(maxFromChild, getLcsFromSuffixTree(child))
    return len(suffixTree.text) + maxFromChild

def lcs(str1, str2):
  concatenation = str1 + '*' + str2 + '$'
  suffixTree = SuffixTree(concatenation)
  return getLcsFromSuffixTree(suffixTree)


