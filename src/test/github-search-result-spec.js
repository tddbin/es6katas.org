import assert from 'assert';
import GithubSearchResult from '../github-search-result.js';

describe('create kata groups from the github search result', function() {
  it('', function() {
    const githubJson = {
      items: [
        {path: "kata/group/file.js"},
        {path: "kata/group/file1.js"},
        {path: "kata/group/file2.js"}
      ]
    };
    
    const searchResult = GithubSearchResult.fromJson(githubJson);
    const kataGroups = searchResult.toKataGroups();
    
    //assert.equal(kataGroups, '???');
  });
});