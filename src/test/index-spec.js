import assert from 'assert';
import {getPathList} from '../index.js';

/**
 x get out all paths out of the JSON
 x group the katas
 - sort the kata groups (somehow???)
 x generate the tddbin link object
*/

describe('convert github data', function() {
  it('to a list of kata paths', function() {
    const githubJson = {
      items: [
        {path: "path1"},
        {path: "path2"},
        {path: "path3"}
      ]
    };
    
    assert.deepEqual(getPathList(githubJson), ['path1', 'path2', 'path3']);
  });
});
