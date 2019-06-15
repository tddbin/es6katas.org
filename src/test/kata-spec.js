import {describe, it} from 'kavun';
import assert from 'assert';
import Kata from '../kata.js';

describe('kata', function() {
  describe('provides all values passed to it as properties', function() {
    
    let name = 'moi';
    let desc = 'description';
    let id = '123';
    let kata;
    beforeEach(function() {
      kata = Kata.fromRawItem({name, desc, id});
    });
    it('property `name`', () => assert.equal(kata.name, name));
    it('property `desc`', () => assert.equal(kata.desc, desc));
    it('ensures the `id` is an int', () => assert.strictEqual(kata.id, +id));
  });

  it('generate the kata link from a path', function() {
    const path = 'template-strings/multiline';
    let kata = Kata.fromRawItem({path});

    const expectedUrl = 'http://tddbin.com/#?kata=es6/language/template-strings/multiline';
    
    assert.deepEqual(kata.url, expectedUrl);
  });

});
