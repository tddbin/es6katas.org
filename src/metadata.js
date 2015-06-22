import KataGroup from './katagroup.js';

export default class Metadata {
  
  static toKataGroups(groupedMetadataJson) {
    return KataGroups.fromObject(fromMetadataJsonToKataGroups(groupedMetadataJson));
  }
}

class KataGroups extends Array {

  static fromObject(obj) {
    const groups = new KataGroups();
    for (let key in obj) {
      groups.push(obj[key]);
    }
    groups.sortByNumberOfLinks();
    return groups;
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
  
  isNewest(kata) {
    const highestId = this
      .map(group => group.highestId)
      .sort()
      .reverse()
      [0];
    return kata.id === highestId;
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
