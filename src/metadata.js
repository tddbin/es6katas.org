import KataGroup from './katagroup.js';

export default class Metadata {
  
  static toKataGroups(groupedMetadataJson) {
    return KataGroups.fromObject(fromMetadataJsonToKataGroups(groupedMetadataJson));
  }
}

class KataGroups {
  
  constructor() {
    this.groups = [];
  }

  all() {
    return this.groups;
  }
  
  get length() {
    return this.all().length;
  }
  
  static fromObject(obj) {
    const groups = new KataGroups();
    groups.initializePropertiesFromRawObject(obj);
    groups.sortByNumberOfLinks();
    groups.moveNewestKataToBeginning();
    return groups;
  }

  initializePropertiesFromRawObject(obj) {
    const allKeys = Object.keys(obj);
    allKeys.forEach(key => this.groups.push(obj[key]));
  }
  
  sortByNumberOfLinks() {
    this.groups.sort(function(group, anotherGroup) {
      var katasCount = group.katas.length;
      var anotherKatasCount = anotherGroup.katas.length;
      if (katasCount === anotherKatasCount) {
        return anotherGroup.name < group.name ? 1 : -1;
      }
      return anotherKatasCount - katasCount;
    });
  }
  
  eachGroupsHighestKataId() {
    return this.groups.map(group => group.highestId);
  }
  
  highestKataId() {
    return this.eachGroupsHighestKataId().sort().reverse()[0];
  }
  
  isNewestKata({id}) {
    return Number.parseInt(id) === this.highestKataId();
  }
  
  groupWithNewestKata() {
    const groupWithHighestId = (prev, cur) => prev.highestId > cur.highestId ? prev : cur;
    return this.groups.reduce(groupWithHighestId, {highestId:0})
  }
  
  moveNewestKataToBeginning() {
    this.moveToBeginning(this.groupWithNewestKata());
  }
  
  moveToBeginning(itemToMove) {
    const idx = this.groups
      .map((item, idx) => Object.is(item, itemToMove) ? idx : null)
      .filter(id => id != null)[0];
    this.groups.unshift(this.groups.splice(idx, 1)[0]);
  }
  
}

function fromMetadataJsonToKataGroups(groupedMetadataJson) {
  const groups = groupedMetadataJson.groups;
  const groupNames = Object.keys(groups);
  return groupNames.map((groupName) => {
    let rawKataItems = groups[groupName].items;
    return KataGroup.withKatas(groupName, rawKataItems);
  });
}
