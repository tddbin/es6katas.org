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
  return githubJson.items.map((item) => item.path);
};

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
        const group1Name = 'group1';
        const group2Name = 'group2';
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

const toKataGroups = (paths) => {
  const groupName = paths[0].split('/').reverse()[1];
  return {[groupName]: paths};
};