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
          'group with 1 kata': {items: [{id:0}]},
          'group with 2 katas': {items: [{id:1}, {id:'21'}]},
          'group with newest kata': {items: [{id:'111'}]}
        }
      };
    
      kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    });
    it('first is the one with the newest kata inside', function() {
      assert.equal(kataGroups[0].name, 'group with newest kata');
    });
    it('second is the one with most katas', function() {
      assert.equal(kataGroups[1].name, 'group with 2 katas');
    });
    it('third is the one with less katas', function() {
      assert.equal(kataGroups[2].name, 'group with 1 kata');
    });
  
    it('by name when number of files is the same', function() {
      const groupedMetadataJson = {
        groups: {
          'group b': {items: [{id:0}]},
          'group a': {items: [{id:1}]}
        }
      };
    
      var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
      assert.equal(kataGroups[0].name, 'group a');
    });
  });

  describe('find newest kata', function() {
    let kataGroups;
    beforeEach(function() {
      const groupedMetadataJson = {
        groups: {
          'group with 1 kata': {items: [{id: '2'}]},
          'group with 2 katas': {items: [{id: '4'}, {id: '93'}]}
        }
      };
    
      kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    });

    it('with the highest ID', function() {
      let kataDouble = {id: '93'};
      assert.equal(kataGroups.isNewestKata(kataDouble), true);
    });
    
  });
});
