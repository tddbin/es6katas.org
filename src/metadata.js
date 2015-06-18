import KataGroup from './katagroup.js';
import KataLink from './katalink.js';

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
    //groups.sortByNumberOfLinks();
    return groups;
  }
  
  sortByNumberOfLinks() {
    this.sort(function(group, group1) {
      var l = group.kataLinks.length;
      var l1 = group1.kataLinks.length;
      if (l === l1) {
        return group1.name < group.name ? 1 : -1;
      }
      return l1 - l;
    });
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

//function getPathListFromGithubJson(githubJson) {
//  return githubJson.items
//    .filter((item) => !item.path.split('/').reverse()[0].startsWith('__'))
//    .map((item) => item.path)
//  ;
//}
//
//function fromMetadataJsonToKataGroups(githubJson) {
//  const paths = getPathListFromGithubJson(githubJson);
//  const grouped = paths
//    .map(parsePath)
//    .reduce(createGroups, {});
//  
//  let groups = [];
//  for (let groupName in grouped) {
//    groups.push(KataGroup.withLinks(groupName, grouped[groupName]));
//  }
//  return groups;
//}
//
//function parsePath(path) {
//  const groupName = path.split('/').reverse()[1];
//  return {
//    groupName: groupName,
//    path: path
//  };
//}
//
//function createGroups(obj, path){
//  const groupName = path.groupName;
//  if (!(groupName in obj)) {
//    obj[groupName] = [];
//  }
//  obj[groupName].push(KataLink.fromPath(path.path));
//  return obj;
//}