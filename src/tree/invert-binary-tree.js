/*
https://leetcode.com/problems/invert-binary-tree/
Invert a binary tree
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};