// Brute force solution:

// Time complexity: O(n²)
// Space complexity: O(1)

function shortestPalindrome(str){
  let mirrorLength = 0;
  for(let i = 0; i <= str.length; i++){
    if(str.substring(0, i) == str.substring(0, i).split("").reverse().join(""))
      mirrorLength = i;
  }
  return str.substring(mirrorLength).split("").reverse().join("") + str;
}


