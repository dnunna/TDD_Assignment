function letterCount(word, letter) {
var index;
var lowerword = word.toLowerCase();
index = lowerword.indexOf(letter);
var count = 0;

while(index !== -1){
  count++;
  index = lowerword.indexOf(letter, index+1);
  // console.log(index);
}
console.log("the letter n present in the word " + count + " times");
return count;

}

module.exports = letterCount;
