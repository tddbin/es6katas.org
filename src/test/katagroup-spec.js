import assert from 'assert';
import KataGroup from '../katagroup.js';
import Kata from '../kata.js';

describe('kata group', function() {
  it('provides the `name` given to it', function() {
    const name = 'name';
    const group = KataGroup.withKatas(name);
    
    assert.equal(group.name, name);
  });
  it('provides the `katas`', function() {
    const rawKataItems = [];
    const group = KataGroup.withKatas('', rawKataItems);
    
    assert.deepEqual(group.katas, rawKataItems);
  });

  it('each kata is a Kata instance', function() {
    const rawKataItems = [{}];
    const group = KataGroup.withKatas('', rawKataItems);
    
    assert.deepEqual(group.katas[0] instanceof Kata, true);
  });
  
  describe('sort the katas by id, so the difficulty goes up', function() {
    let group;
    beforeEach(function() {
      const katas = [
        Kata.fromRawItem({id: 2}),  
        Kata.fromRawItem({id: 3}),  
        Kata.fromRawItem({id: 1})  
      ];
      group = KataGroup.withKatas('', katas);
    });
    it('first value must be `1`', () => assert.equal(group.katas[0].id, 1));
    it('first value must be `2`', () => assert.equal(group.katas[1].id, 2));
    it('first value must be `3`', () => assert.equal(group.katas[2].id, 3));
  });
});