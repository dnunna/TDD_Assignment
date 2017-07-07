var harePopulation = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

describe('harePopulation()', function() {
    context('when the start population 200, birthrate 0.1 and num of weeks 5', function() {
      it('the future hare population will be  300', function() {

        let startpopulation = 200;
        let birthrate = 0.1;
        let numofweeks = 5;

        var  population = harePopulation(startpopulation, birthrate, numofweeks);
        expect(population).to.equal(300);
      });
    });
  });

  describe('harePopulation()', function() {
      context('when the start population 400, birthrate 0.1 and num of weeks 6', function() {
        it('the future hare population will be  640', function() {

          let startpopulation = 400;
          let birthrate = 0.1;
          let numofweeks = 6;

          var  population = harePopulation(startpopulation, birthrate, numofweeks);
          expect(population).to.equal(640);
        });
      });
    });
