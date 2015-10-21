import assert from 'assert';
import RawMetadata from '../rawmetadata.js';

const rawMetadataToKataGroups = (metadataJson) => {
  return RawMetadata.toKataGroups(metadataJson);
};

class Kata {
  static withId(id) {
    return {id};
  }
}

describe('create KataGroups from the raw metadata', function() {

  const group = {items: [Kata.withId(1)]};
  const anotherGroup = {items: [Kata.withId(2)]};
  
  it('for one group only one KataGroup is created', function() {
    const groupedMetadataJson = {
      groups: {'group name': group}
    };
    
    var kataGroups = rawMetadataToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 1);
  });
  
  it('two groups two KataGroups are created', function() {
    const groupedMetadataJson = {
      groups: {
        'group name': group,
        'group name1': anotherGroup
      }
    };

    var kataGroups = rawMetadataToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 2);
  });
});
