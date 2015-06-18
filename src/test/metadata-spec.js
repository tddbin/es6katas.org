import assert from 'assert';
import Metadata from '../metadata.js';

const fromMetadataJsonToKataGroups = (metadataJson) => {
  return Metadata.toKataGroups(metadataJson);
};

describe('create KataGroups from the metadata', function() {

  it('for one group only one KataGroup is created', function() {
    const metadataJson = {
      groups: {
        'group name': {items: []}
      }
    };
    
    var kataGroups = fromMetadataJsonToKataGroups(metadataJson);
    assert.equal(kataGroups.length, 1);
  });
  
//  it('two groups are created for the two group names', function() {
//    const githubJson = {
//      items: [
//        {path: "kata/group/file.js"},
//        {path: "kata/group1/file2.js"}
//      ]
//    };
//
//    var kataGroups = fromMetadataJsonToKataGroups(githubJson).length;
//    assert.equal(kataGroups, 2);
//  });
//
//  it('ignore filenames starting with `__`', function() {
//    const githubJson = {
//      items: [
//        {path: "kata/group/file.js"},
//        {path: "kata/group/__somestuff__.js"}
//      ]
//    };
//
//    var kataGroups = fromMetadataJsonToKataGroups(githubJson);
//    assert.equal(kataGroups[0].kataLinks.length, 1);
//  });
//});
//
//describe('sort kata groups', function() {
//  it('by number of files inside group', function() {
//    const githubJson = {
//      items: [
//        {path: "kata/group/file.js"},
//        {path: "kata/group1/file1.js"},
//        {path: "kata/group1/file2.js"}
//      ]
//    };
//  
//    var kataGroups = fromMetadataJsonToKataGroups(githubJson);
//    assert.equal(kataGroups[0].name, 'group1');
//  });
//
//  it('by name when number of files is the same', function() {
//    const githubJson = {
//      items: [
//        {path: "kata/ab/file.js"},
//        {path: "kata/aa/file.js"}
//      ]
//    };
//  
//    var kataGroups = fromMetadataJsonToKataGroups(githubJson);
//    assert.equal(kataGroups[0].name, 'aa');
//  });
});
