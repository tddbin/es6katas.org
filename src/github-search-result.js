import KataGroup from './katagroup.js';
import KataLink from './katalink.js';

export default class GithubSearchResult {
  
  static toKataGroups(githubJson) {
    return KataGroups.fromObject(fromGithubJsonToKataGroups(githubJson));
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
      var l = group.length;
      var l1 = group1.length;
      if (l === l1) {
        return group1.name < group.name ? 1 : -1;
      }
      return l1 - l;
    });
  }
  
}

function getPathListFromGithubJson(githubJson) {
  return githubJson.items.map((item) => item.path);
}

function fromGithubJsonToKataGroups(githubJson) {
  const paths = getPathListFromGithubJson(githubJson);
  const grouped = paths
    .map(parsePath)
    .reduce(createGroups, {});
  
  let groups = [];
  for (let groupName in grouped) {
    groups.push(KataGroup.withLinks(groupName, grouped[groupName]));
  }
  return groups;
}

function parsePath(path) {
  const groupName = path.split('/').reverse()[1];
  return {
    groupName: groupName,
    path: path
  };
}

function createGroups(obj, path){
  const groupName = path.groupName;
  if (!(groupName in obj)) {
    obj[groupName] = [];
  }
  obj[groupName].push(KataLink.fromPath(path.path));
  return obj;
}