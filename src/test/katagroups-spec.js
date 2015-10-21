import assert from 'assert';
import KataGroups from '../katagroups';
import KataGroup from '../katagroup';

class Kata {
  static withId(id) {
    return {id};
  }
}

describe('sort kata groups', function() {
  let allKataGroups;
  beforeEach(function() {
    const kataGroups = new KataGroups();
    kataGroups.addGroup(KataGroup.withKatas('group with 1 kata', [Kata.withId(0)]));
    kataGroups.addGroup(KataGroup.withKatas('group with 2 katas', [Kata.withId(1), Kata.withId('21')]));
    kataGroups.addGroup(KataGroup.withKatas('group with newest kata', [Kata.withId('111')]));
    kataGroups.sortByNumberOfLinks();
    kataGroups.moveGroupWithNewestKataToBeginning();
    allKataGroups = kataGroups.all();
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
    const kataGroups = new KataGroups();
    kataGroups.addGroup(KataGroup.withKatas('group b', [Kata.withId(0)]));
    kataGroups.addGroup(KataGroup.withKatas('group a', [Kata.withId(1)]));
    kataGroups.sortByNumberOfLinks();
    kataGroups.moveGroupWithNewestKataToBeginning();
  
    assert.equal(kataGroups.all()[0].name, 'group a');
  });
});

describe('find newest kata', function() {

  it('with the highest ID', function() {
    const kataGroups = new KataGroups();
    kataGroups.addGroup(KataGroup.withKatas('group with 1 kata', [Kata.withId(2)]));
    kataGroups.addGroup(KataGroup.withKatas('group with 2 katas', [Kata.withId(4), Kata.withId(13)]));
    assert.equal(kataGroups.isNewestKata(Kata.withId(13)), true);
  });
  
});
