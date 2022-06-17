# Brute force solution:

# Time complexity: O(mn³)
# Space complexity: O(1)

def lcs(str1, str2):
  maxLen = 0
  for i in range(len(str1)):
    for j in range(i+1, len(str1)+1):
      if str1[i:j] in str2:
        maxLen = max(maxLen, j-i)
  return maxLen


