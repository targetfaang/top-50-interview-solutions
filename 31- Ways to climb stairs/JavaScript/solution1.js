// By using recursion:

// Time complexity: O(m^n)
// Space complexity: O(n)

function waysToClimb(n, possibleSteps){
  if(n == 0) return 1;
  let nbWays = 0;
  for(let steps of possibleSteps)
    if((n-steps) >= 0)
      nbWays += waysToClimb(n-steps, possibleSteps);
  return nbWays;
}


