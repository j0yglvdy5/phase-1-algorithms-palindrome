function isPalindrome(word) {
  // I'm suppossed to create a Write a function isPalindrome that will receive one argument, a string.
  // Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.
  //To keep things simple, your function only needs to deal with lowercase strings that are all letters (don't worry about spaces or special characters).
  word.toLocaleLowerCase();
  let newWord = word.split("").reverse().join("");
  if (word === newWord) {
    return true;
} else {
    return false;
}

}

/* 
  Add your pseudocode here
  convert to lowercase 
  split -> "abba"=== "a""b""b""a"
  reverse -> "a""b""b""a"=== "a""b""b""a"
  join -> "a""b""b""a"=== "abba"
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
 // console.log("=>", isPalindrome("racecar"));

 console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
