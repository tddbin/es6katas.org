import assert from 'assert';
import Metadata from '../metadata.js';

const fromMetadataJsonToKataGroups = (metadataJson) => {
  return Metadata.toKataGroups(metadataJson);
};

describe('create KataGroups from the metadata', function() {

  it('for one group only one KataGroup is created', function() {
    const groupedMetadataJson = {
      groups: {
        'group name': {items: []}
      }
    };
    
    var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 1);
  });
  
  it('two groups two KataGroups are created', function() {
    const groupedMetadataJson = {
      groups: {
        'group name': {items: []},
        'group name1': {items: []}
      }
    };

    var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 2);
  });

  describe('sort kata groups', function() {
    let kataGroups;
    beforeEach(function() {
      const groupedMetadataJson = {
        groups: {
          'group with 1 kata': {items: [{}]},
          'group with 2 katas': {items: [{}, {}]}
        }
      };
    
      kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    });
    it('first is the one with most katas', function() {
      assert.equal(kataGroups[0].name, 'group with 2 katas');
    });
    it('second the one with less katas', function() {
      assert.equal(kataGroups[1].name, 'group with 1 kata');
    });
  
    it('by name when number of files is the same', function() {
      const groupedMetadataJson = {
        groups: {
          'group b': {items: [{}]},
          'group a': {items: [{}]}
        }
      };
    
      var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
      assert.equal(kataGroups[0].name, 'group a');
    });
  });
});
