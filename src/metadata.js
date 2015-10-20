import KataGroup from './katagroup.js';
import KataGroups from './katagroups.js';

export default class Metadata {
  
  static toKataGroups(groupedMetadataJson) {
    return KataGroups.fromObject(fromMetadataJsonToKataGroups(groupedMetadataJson));
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
