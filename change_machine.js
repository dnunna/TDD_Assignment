function changeAmount(Amount) {

var bills = [20, 10, 5, 1];
var changeArray = [];
var billcount;
console.log("************************************");
console.log("Change Machine solution");
for(let i=0; i< bills.length; i++)
{
    billcount = Math.floor(Amount/bills[i]);
    changeArray.push(billcount);
    Amount = (Amount - (billcount*bills[i]));
}
console.log(147 + " is splitted into " + bills + " bills in the following order " + changeArray);
return changeArray;

}

module.exports = changeAmount;
