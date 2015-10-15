import KataGroup from './katagroup.js';

export default class Metadata {
  
  static toKataGroups(groupedMetadataJson) {
    return KataGroups.fromObject(fromMetadataJsonToKataGroups(groupedMetadataJson));
  }
}

class KataGroups extends Array {

  static fromObject(obj) {
    const groups = new KataGroups();
    groups.initializePropertiesFromRawObject(obj);
    groups.sortByNumberOfLinks();
    groups.makeNewestFirst();
    return groups;
  }

  initializePropertiesFromRawObject(obj) {
    const allKeys = Object.keys(obj);
    allKeys.forEach(key => this.push(obj[key]));
  }
  
  sortByNumberOfLinks() {
    this.sort(function(group, group1) {
      var l = group.katas.length;
      var l1 = group1.katas.length;
      if (l === l1) {
        return group1.name < group.name ? 1 : -1;
      }
      return l1 - l;
    });
  }
  
  isNewestKata(kata) {
    const highestId = this
      .map(group => parseInt(group.highestId, 10))
      .sort((one, two) => one < two ? -1 : 1)
      .reverse()
      [0];
    return parseInt(kata.id) === highestId;
  }
  
  makeNewestFirst() {
    const groupWithNewestKata = this.reduce((prev, cur) => {
      return prev.highestId > cur.highestId ? prev : cur;
    }, {highestId:0});
    this.moveToBeginning(groupWithNewestKata);
  }
  
  moveToBeginning(itemToMove) {
    const idx = this
      .map((item, idx) => Object.is(item, itemToMove) ? idx : null)
      .filter(id => id != null)[0];
    this.unshift(this.splice(idx, 1)[0]);
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
