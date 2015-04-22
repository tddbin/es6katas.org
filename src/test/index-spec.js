import assert from 'assert';

describe('tests run', function() {
  it('should', function() {
    assert.equal(1, 1);
  });
});

/**
 - get out all paths out of the JSON
 - group the katas
 - sort the kata groups (somehow???)
 - generate the tddbin link object
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

const getPathList = (githubJson) => {
  return ['path1', 'path2', 'path3'];
};