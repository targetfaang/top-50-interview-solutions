# Brute force solution:

# Time complexity: O(n�)
# Space complexity: O(n)

def removeDuplicates(arr):
  noDuplicatesArr = []
  for element in arr:
    if element not in noDuplicatesArr:
      noDuplicatesArr.append(element)
  return noDuplicatesArr


