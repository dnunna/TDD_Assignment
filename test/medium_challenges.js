var mediumChallenges = require('../medium_challenges');
var chai = require('chai');
var expect = chai.expect;

describe('mediumChallenges', function() {
    context('when two numbers are sent', function() {
      it('sum of the 10 & 5 is 15', function() {

        let a = 10;
        let b = 5;
        var total = mediumChallenges.sum(a,b);
        expect(total).to.equal(15);
      });
    });


    context('when three numbers are sent', function() {
      it('average of the 10, 5, 15 is 10', function() {

        let a = 10;
        let b = 5;
        let c = 15;
        var avgValue = mediumChallenges.average(a,b,c);
        expect(avgValue).to.equal(10);
      });
    });


    context('when two numbers passed', function() {
      it('the greater number in the 100 & 145 is 145', function() {

        let a = 100;
        let b = 145;
        var grtValue = mediumChallenges.greater(a,b);
        expect(grtValue).to.equal(145);
      });
    });

    context('when a number array passed', function() {
      it('the second largest number in the array 8, 3, 1, 20, 5, 9] is 9', function() {

        let a = [8, 3, 1, 20, 5, 9];
        var seclrgValue = mediumChallenges.largest(a);
        expect(seclrgValue).to.equal(9);
      });
    });

    context('when a word longest river is passed', function() {
      it('the number of vowels in longest river is 4', function() {

        let word = 'longest river';
        var count = mediumChallenges.vowel(word);
        expect(count).to.equal(4);
      });
    });


  });
