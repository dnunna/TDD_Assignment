// test ---
//
// var tallestMountain = require('../tallest_mountain');
var maxHeight = require('../tallest_mountain');
var chai = require('chai');
var expect = chai.expect;

describe('maxHeight()', function() {
    context('when mount heights are [10,12,5,34]', function() {
      it('returns 34 as highest mountain', function() {

        let mountainheights = [10,12,5,34];
        var tallestMountain = maxHeight(mountainheights);
        expect(tallestMountain).to.equal(34);
      });
    });
  });

  describe('maxHeight()', function() {
      context('when mount heights are [4,5,6]', function() {
        it('returns 6 as highest mountain', function() {
          let mountainheights = [4,5,6]
          var tallestMountain = maxHeight(mountainheights);
          expect(tallestMountain).to.equal(6);
        });
      });
    });
