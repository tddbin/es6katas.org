import assert from 'assert';
import KataGroups from '../katagroups';
import KataGroup from '../katagroup';

class Kata {
  static withId(id) {
    return {id};
  }
}

describe('sort kata groups', function() {

  function sortedKataGroups(...groups) {
    const kataGroups = new KataGroups();
    groups.forEach(kataGroups.addGroup.bind(kataGroups));
    kataGroups.sort();
    return kataGroups.all();
  }
  
  let allKataGroups;
  beforeEach(function() {
    allKataGroups = sortedKataGroups(
      KataGroup.withKatas('group with 1 kata', [Kata.withId(0)]),
      KataGroup.withKatas('group with 2 katas', [Kata.withId(1), Kata.withId('21')]),
      KataGroup.withKatas('group with newest kata', [Kata.withId('111')])
    );
  });
  it('first is the one with the newest kata inside', function() {
    assert.equal(allKataGroups[0].name, 'group with newest kata');
  });
  it('second is the one with most katas', function() {
    assert.equal(allKataGroups[1].name, 'group with 2 katas');
  });
  it('third is the one with less katas', function() {
    assert.equal(allKataGroups[2].name, 'group with 1 kata');
  });

  it('by name when number of files is the same', function() {
    allKataGroups = sortedKataGroups(
      KataGroup.withKatas('group b', [Kata.withId(0)]),
      KataGroup.withKatas('group a', [Kata.withId(1)])
    );
  
    assert.equal(allKataGroups[0].name, 'group a');
  });
});

describe('find newest kata', function() {

  it('the newest kata is the one with the highest ID', function() {
    const kataGroups = new KataGroups();
    kataGroups.addGroup(KataGroup.withKatas('group with 1 kata', [Kata.withId(2)]));
    kataGroups.addGroup(KataGroup.withKatas('group with 2 katas', [Kata.withId(4), Kata.withId(13)]));
    assert.equal(kataGroups.isNewestKata(Kata.withId(13)), true);
  });
  
});
