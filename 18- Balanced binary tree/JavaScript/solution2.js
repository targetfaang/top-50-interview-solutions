// Time complexity: O(n)
// Space complexity: O(h)

class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function rec(root, output){
	if(root == null) return -1;
	let lefth = height(root.left);
	let righth = height(root.right);
	if(Math.abs(lefth-righth) > 1) output[0] = false;
	return 1 + Math.max(lefth, righth);
}

function isBalanced(root){
	let output = [true];
	rec(root, output);
	return output[0];
}


