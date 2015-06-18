import assert from 'assert';
import Kata from '../kata.js';

describe('kata', function() {
  it('provides all values passed to it as properties', function() {
    let name = 'moi';
    let desc = 'description';
    let kata = Kata.fromRawItem({name, desc});

    const expected = [['name','moi'], ['desc','description']];
    assert.deepEqual(Object.entries(kata), expected);
  });
});
