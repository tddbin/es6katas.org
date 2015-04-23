import assert from 'assert';
import {getPathList, toKataGroups, pathToLink} from '../index.js';

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

describe('kata groups, from a list of paths', function() {
  describe('use the last directory as the group name', function() {
    describe('for one group', function() {
      var groupName = 'group1';
      const inGroup1 = `dir/${groupName}/file.js`;
      const alsoInGroup1 = `dir/${groupName}/file1.js`;
      it('one path', () => {
        const expected = {[groupName]: [inGroup1]};
        assert.deepEqual(toKataGroups([inGroup1]), expected)
      });
      it('for two paths', () => {
        const expected = {[groupName]: [inGroup1, alsoInGroup1]};
        assert.deepEqual(toKataGroups([inGroup1, alsoInGroup1]), expected)
      });
    });
    describe('for two groups', function() {
      it('two paths each', () => {
        const group1Name = 'groupA';
        const group2Name = 'groupB';
        const paths1 = [`dir/${group1Name}/file.js`, `dir/${group1Name}/file1.js`];
        const paths2 = [`dir/${group2Name}/file2.js`, `dir/${group2Name}/file3.js`];
        
        const expected = {
          [group1Name]: paths1,
          [group2Name]: paths2
        };
        assert.deepEqual(toKataGroups([...paths1, ...paths2]), expected)
      });
    });
  });
});

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
