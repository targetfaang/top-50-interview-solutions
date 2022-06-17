# Time complexity: O(n)
# Space complexity: O(h)

class Tree:
  def __init__(self, data, left = None, right = None):
    self.data = data
    self.left = left
    self.right = right
    
def _is_balanced(root, output):
	if root is None:
		return -1
	else:
		lefth = height(root.left)
		righth = height(root.right)
		if abs(lefth - righth) > 1:
			output[0] = False
		return 1 + max(lefth, righth)
			
def is_balanced(root):
	output = [True]
	_is_balanced(root, output)
	return output[0]



