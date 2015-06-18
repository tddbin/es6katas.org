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

  it('the katas are cloned', function() {
    const rawKataItems = [];
    const group = KataGroup.withKatas('', rawKataItems);
    
    rawKataItems.push(1);
    assert.deepEqual(group.katas.length, 0);
  });

  it('each kata is a Kata instance', function() {
    const rawKataItems = [{}];
    const group = KataGroup.withKatas('', rawKataItems);
    
    assert.deepEqual(group.katas[0] instanceof Kata, true);
  });
  
  //it('sort the links by name', function() {
  //  const kataLinks = [
  //    KataLink.fromPath('path/class/create.js'),  
  //    KataLink.fromPath('path/class/accessor.js')  
  //  ];
  //  const group = KataGroup.withLinks('', kataLinks);
  //
  //  var expected = kataLinks[1].text;
  //  assert.equal(group.kataLinks[0].text, expected);
  //});
});