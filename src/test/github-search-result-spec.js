import assert from 'assert';
import GithubSearchResult from '../github-search-result.js';

const fromGithubJsonToKataGroups = (githubJson) => {
  return GithubSearchResult.toKataGroups(githubJson);
};

describe('create kata groups from the github search result', function() {
  it('one group is created for the same group name', function() {
    const githubJson = {
      items: [
        {path: "kata/group/file.js"},
        {path: "kata/group/file1.js"},
        {path: "kata/group/file2.js"}
      ]
    };
  
    var kataGroups = fromGithubJsonToKataGroups(githubJson).length;
    assert.equal(kataGroups, 1);
  });
  
  it('one group is created for the same group name', function() {
    const githubJson = {
      items: [
        {path: "kata/group/file.js"},
        {path: "kata/group/file1.js"},
        {path: "kata/group/file2.js"}
      ]
    };

    var kataGroups = fromGithubJsonToKataGroups(githubJson);
    assert.equal(kataGroups[0].name, 'group');
  });
  
  it('two groups are created for the two group names', function() {
    const githubJson = {
      items: [
        {path: "kata/group/file.js"},
        {path: "kata/group1/file2.js"}
      ]
    };

    var kataGroups = fromGithubJsonToKataGroups(githubJson).length;
    assert.equal(kataGroups, 2);
  });
});

describe('sort kata groups', function() {
  it('by number of files inside group', function() {
    const githubJson = {
      items: [
        {path: "kata/group/file.js"},
        {path: "kata/group1/file1.js"},
        {path: "kata/group1/file2.js"}
      ]
    };
  
    var kataGroups = fromGithubJsonToKataGroups(githubJson);
    assert.equal(kataGroups[0].name, 'group1');
  });

});
