import Kata from './kata.js';

export default class KataGroup {
 
  static withKatas(groupName, rawKataItems=[]) {
    var group = new KataGroup();
    group.name = groupName;
    group.katas = rawKataItems.map(item => Kata.fromRawItem(item));
    group.sortByName();
    return group;
  }
  
  sortByName() {
    this.katas.sort(function(link, link1) {
      return link.name < link1.name ? -1 : 1;
    });
  }
  
}