import assert from 'assert';
import KataGroup from '../katagroup.js';
import Kata from '../kata.js';

class KataGroupBuilder {
  constructor() {
    this.kataGroup = new KataGroup();
  }
  withName(name) {
    this.kataGroup.name = name;
    return this;
  }
  withRawKatas(rawKatas) {
    this.kataGroup.createKatas(rawKatas);
    return this;
  }
  get() {
    return this.kataGroup;
  }
}

describe('kata group', function() {
  it('provides the `name` given to it', function() {
    const name = 'name';
    const group = new KataGroupBuilder()
      .withName(name)
      .withRawKatas([])
      .get();
    
    assert.equal(group.name, name);
  });
  it('provides the `katas`', function() {
    const rawKataItems = [];
    const group = new KataGroupBuilder()
      .withName('')
      .withRawKatas(rawKataItems)
      .get();
    
    assert.deepEqual(group.katas, rawKataItems);
  });

  it('each kata is a Kata instance', function() {
    const rawKataItems = [{}];
    const group = new KataGroupBuilder()
      .withName('')
      .withRawKatas(rawKataItems)
      .get();
    
    assert.deepEqual(group.katas[0] instanceof Kata, true);
  });
  
  describe('sort the katas by id, so the difficulty goes up', function() {
    let group;
    beforeEach(function() {
      const katas = [
        Kata.fromRawItem({id: '11'}),
        Kata.fromRawItem({id: '3'}),
        Kata.fromRawItem({id: '1'})
      ];
      group = new KataGroupBuilder()
        .withName('')
        .withRawKatas(katas)
        .get();
      group.sort();
    });
    it('1st value must be `1`', () => assert.equal(group.katas[0].id, 1));
    it('2nd value must be `3`', () => assert.equal(group.katas[1].id, 3));
    it('3rd value must be `11`', () => assert.equal(group.katas[2].id, 11));
  });

  describe('get highest ID', function() {
    it('for 1 kata return it`s ID', function() {
      const katas = [
        Kata.fromRawItem({id: 1})  
      ];
      let group = new KataGroupBuilder()
        .withName('')
        .withRawKatas(katas)
        .get();
      
      assert.equal(group.highestId, 1);
    });
    
    it('for multiple katas return the highest', function() {
      const katas = [
        Kata.fromRawItem({id: '11'}),  
        Kata.fromRawItem({id: '3'}),  
        Kata.fromRawItem({id: '1'})  
      ];
      let group = new KataGroupBuilder()
        .withName('')
        .withRawKatas(katas)
        .get();
      
      assert.equal(group.highestId, 11);
    });
  });
  
});