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
  
  describe('sort the katas by name', function() {
    let group;
    beforeEach(function() {
      const katas = [
        Kata.fromRawItem({name: 'a'}),  
        Kata.fromRawItem({name: 'c'}),  
        Kata.fromRawItem({name: 'b'})  
      ];
      group = KataGroup.withKatas('', katas);
    });
    it('first value must be `a`', () => assert.equal(group.katas[0].name, 'a'));
    it('first value must be `b`', () => assert.equal(group.katas[1].name, 'b'));
    it('first value must be `c`', () => assert.equal(group.katas[2].name, 'c'));
  });
});