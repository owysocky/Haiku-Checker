import { count } from './../src/haiku.js';
import { isHaiku } from './../src/haiku.js';

describe('Count', function() {

  it('should test whether syllables count is 5, 7, 5', function() {
    var firstLine = "The summer river:";
    var secondLine = "I swat fly and offer it";
    var thirdLine = "Plum flower temple.";

    expect(count(firstLine, secondLine, thirdLine)).toEqual(5, 7, 5);
  });

  it('should test whether syllables count is 5, 7, 5', function() {
    var firstLine = 5;
    var secondLine = 7;
    var thirdLine = 5;

    expect(isHaiku(firstLine, secondLine, thirdLine)).toEqual(true);
  });

});
