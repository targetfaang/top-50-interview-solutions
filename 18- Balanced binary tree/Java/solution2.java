// Time complexity: O(n)
// Space complexity: O(h)


static class Tree{
  int data;
  Tree left;
  Tree right;
  
  Tree(int data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
  
  Tree(int data, Tree left, Tree right){
      this.data = data;
      this.left = left;
      this.right = right;
  }
}

static int isBalanced(Tree root, boolean[] output){
	if(root == null) return -1;
	int lefth = height(root.left);
	int righth = height(root.right);
	if(Math.abs(lefth-righth) > 1) output[0] = false;
	return 1 + Math.max(lefth, righth);
}

static boolean isBalanced(root){
	boolean[] output = {true};
	isBalanced(root, output);
	return output[0];
}


