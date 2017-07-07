function maxHeight(heightArray){
  tallestMountain = heightArray.sort(function(a,b){return b-a});
  return tallestMountain[0];
}

module.exports = maxHeight;

// function tallestMountain(mountainArray) {
//   return Math.max.apply(Math, mountainArray);
// }
//
// let mountain = tallestMountain([1,2,3])
// console.log(mountain)
//
// module.exports = tallestMountain;
