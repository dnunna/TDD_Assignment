function harePopulation(startpopulation, birthrate, numofweeks ) {

let futurePopulation = startpopulation + (startpopulation * birthrate * numofweeks);
console.log("There will be " + futurePopulation +  " Cherokee Hares after " + numofweeks + " weeks");
return futurePopulation;

}

module.exports = harePopulation;
