var palindrome = require('../palindrome_word');
var chai = require('chai');
var expect = chai.expect;

describe('palindrome()', function() {
    context('when the word is racecar', function() {
      it('reverse of the word is racecar', function() {

        let word = 'racecar';
        var reverse = palindrome(word);
        expect(reverse).to.be.true;
      });
    });
  });
