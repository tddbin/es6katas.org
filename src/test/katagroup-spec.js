import assert from 'assert';
import KataGroup from '../katagroup.js';
import KataLink from '../katalink.js';

describe('kata group', function() {
  it('provides the `name` given to it', function() {
    const name = 'name';
    const group = KataGroup.withLinks(name);
    
    assert.equal(group.name, name);
  });
  it('provides the `kataLinks`', function() {
    const kataLinks = [];
    const group = KataGroup.withLinks('', kataLinks);
    
    assert.deepEqual(group+'', kataLinks+'');
  });
  
  it('sort the links by name', function() {
    const kataLinks = [
      KataLink.fromPath('path/class/create'),  
      KataLink.fromPath('path/class/accessor')  
    ];
    const group = KataGroup.withLinks('', kataLinks);

    var expected = JSON.stringify([kataLinks[1], kataLinks[0]]);
    assert.deepEqual(JSON.stringify(group), expected);
  });
});