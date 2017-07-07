var letterCount = require('../letter_occurance');
var chai = require('chai');
var expect = chai.expect;

describe('letterCount()', function() {
    context('when the word is Hangman Lite', function() {
      it('returns letter n count in the word as 2', function() {

        let word = 'Hangman Lite';
        let letter = 'n'
        var count = letterCount(word, letter);
        expect(count).to.equal(2);
      });
    });

    context('when the word is Jonathan Nancy', function() {
        it('returns letter n count in the word as 4', function() {

          let word = 'Jonathan Nancy';
          let letter = 'n'
          var count = letterCount(word, letter);
          expect(count).to.equal(4);
        });
      });
    });
