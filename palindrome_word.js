function palindrome(word) {

  var splitString = word.split("");
  //console.log(splitString);
  var reverseArray = splitString.reverse();
  //console.log(reverseArray);
  var reverseword= reverseArray.join("");

  // Word comparison
  if (word == reverseword)
  {
    console.log("The reverse word is also " + reverseword + " - True");
    return true;
  }
  else {
    console.log("The reverse word is " + reverseword + " - False");
    return false;
  };
}


module.exports = palindrome;
