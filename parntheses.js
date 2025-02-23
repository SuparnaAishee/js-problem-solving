function isValid(s) {
  let stack = [];
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (bracketMap[char]) {
      // If it's an opening bracket, push its corresponding closing bracket
      stack.push(bracketMap[char]);
    } else {
      // If it's a closing bracket, check if it matches the last opened one
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example Test Cases
console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 
console.log(isValid("{[]}")); 
console.log(isValid("{[()][]}")); 
console.log(isValid("{[()][]")); 
