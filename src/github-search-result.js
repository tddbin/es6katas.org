import KataGroup from './katagroup.js';
import KataLink from './katalink.js';

export default class GithubSearchResult {
  
  static fromJson(githubJson) {
    const result = new GithubSearchResult();
    result.githubJson = githubJson;
    return result;
  }
  
  createKataGroups() {
    const paths = getPathListFromGithubJson(this.githubJson);
    const parsePath = (path) => {
      const groupName = path.split('/').reverse()[1];
      return {
        groupName: groupName,
        path: path
      };
    };
    return paths.map(parsePath).reduce(function(obj, path){
      const groupName = path.groupName;
      if (!(groupName in obj)) obj[groupName] = KataGroup.withLinks(groupName);
      obj[groupName].push(KataLink.fromPath(path.path));
      return obj;
    }, {});
  }
  
  toKataGroups() {
    var obj = this.createKataGroups();
    return KataGroups.fromObject(obj);
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

export const getPathListFromGithubJson = (githubJson) => {
  return githubJson.items.map((item) => item.path);
};

