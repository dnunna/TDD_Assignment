var changeAmount = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('changeAmount()', function() {
    context('when the amount is 147 dollars', function() {
      it('returns the amount in the following order of array [7,0, 1, 2]', function() {

        let Amount = 147;
        var changeArray = changeAmount(Amount);
        expect(changeArray).to.deep.equal([7, 0, 1, 2]);
      });
    });
  });

  describe('changeAmount()', function() {
      context('when the amount is 259 dollars', function() {
        it('returns the amount in the following order of array [12, 1, 1, 4]', function() {

          let Amount = 259;
          var changeArray = changeAmount(Amount);
          expect(changeArray).to.deep.equal([12, 1, 1, 4]);
        });
      });
    });
