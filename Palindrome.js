function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str.toLowerCase() === reversed.toLowerCase();
  }
  
  const isRacecar = isPalindrome("racecar");
  console.log(isRacecar); // Output: true
  