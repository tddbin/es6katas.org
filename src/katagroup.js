import Kata from './kata.js';

export default class KataGroup {
 
  static withKatas(groupName, rawKataItems=[]) {
    var group = new KataGroup();
    group.name = groupName;
    group.katas = rawKataItems.map(item => Kata.fromRawItem(item));
    return group;
  }
  
  sortByText() {
    this.kataLinks.sort(function(link, link1) {
      return link.text < link1.text ? -1 : 1;
    });
  }
  
}