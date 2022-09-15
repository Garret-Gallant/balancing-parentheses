function balancingParentheses(string) {
  let hash = {
    open: 0,
    close: 0
  }

  let amount = string.split("")
  amount.forEach(element =>{
    if (element === "(") {
      hash[close] += 1
    }
    if (element === ")") {
      hash[open] += 1
    }
  })

  return Math.abs(hash[open] - hash[close])

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Count amount of opening parenthesis
// count amount of closing parenthesis

// compare the two, if they are equal, break
// if they are not equal subtract the lesser amount from the greater
// return that value
