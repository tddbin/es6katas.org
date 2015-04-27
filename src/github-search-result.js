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
    return groups;
  }
  
}

function getPathListFromGithubJson(githubJson) {
  return githubJson.items.map((item) => item.path);
}

function fromGithubJsonToKataGroups(githubJson) {
  const paths = getPathListFromGithubJson(githubJson);
  return paths
    .map(parsePath)
    .reduce(createGroups, {});
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
    obj[groupName] = KataGroup.withLinks(groupName);
  }
  obj[groupName].push(KataLink.fromPath(path.path));
  return obj;
}