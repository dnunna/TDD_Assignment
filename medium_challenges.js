/*--------------Sum of Two parameters ------------*/
function sum(a,b){
    total = a + b;
  console.log("The total of " + a + " & " + b + " is " + total);
  return total;
}

/*--------------Average of 3 parameters ------------*/

function average(a, b, c){
    let avgValue = (a+b+c)/3;
  console.log("The average of " + a + " & " + b + " & " + c +" is " + avgValue);
  return avgValue;
}

/*--------------Greater value of 2 parameters------------*/

function greater(a,b){
    if(a>b){
      console.log("The greater value in " + a + " & " +  b + " is " + a);
      return a;
    }
    else{
      console.log("The greater value in " + a + " & " +  b + " is " + b);
      return b;
    }

}

/*--------------second larget in number array------------*/
function largest(numberArray){
var sortArray = numberArray.sort(function(a, b){return b-a});
console.log(sortArray);
console.log(sortArray[1]);
// return sortArray;
return sortArray[1];

}

/*--------------Vowels in word------------*/
function vowel(word){
var matches = word.match(/[aeiou]/gi);
console.log(matches);
var count = matches ? matches.length : 0;
console.log(count);

if (count > 0) {
  console.log("true");
}
else {
  console.log("false");
}
return count;
}


module.exports = {sum,
  average,
  greater,
  largest,
  vowel,
}
