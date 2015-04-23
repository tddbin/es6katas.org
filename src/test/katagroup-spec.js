import assert from 'assert';
import {toKataGroups} from '../index.js';

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
