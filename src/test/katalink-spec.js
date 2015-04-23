import assert from 'assert';
import KataLink from '../katalink.js';

const pathToLink = KataLink.fromPath;

describe('generate the kata link from a path', function() {
  it('do it', function() {
    const path = 'katas/es6/language/template-strings/basics.js';
    const link = {
      text: 'basics',
      url: 'http://tddbin.com/#?kata=es6/language/template-strings/basics'
    };
    
    assert.deepEqual(pathToLink(path), link);
  });
});
