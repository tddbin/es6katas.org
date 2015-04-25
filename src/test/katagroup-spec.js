import assert from 'assert';
import KataGroup from '../katagroup.js';

describe('kata group', function() {
  it('provides the `name` given to it', function() {
    const name = 'name';
    const group = KataGroup.withLinks(name);
    
    assert.equal(group.name, name);
  });
  it('provides the `kataLinks`', function() {
    const kataLinks = [];
    const group = KataGroup.withLinks('', kataLinks);
    
    assert.equal(group.kataLinks, kataLinks);
  });
});