import Kata from './kata.js';

export default class KataGroup {
 
  static withKatas(groupName, rawKataItems) {
    var group = new KataGroup();
    group.name = groupName;
    group.createKatas(rawKataItems);
    group.sortByName();
    return group;
  }

  createKatas(rawKataItems) {
    this.katas = rawKataItems.map(item => Kata.fromRawItem(item));
  }
  
  sortByName() {
    this.katas.sort((kata1, kata2) => kata1.id < kata2.id ? -1 : 1);
  }

  get highestId() {
    if (this.katas.length === 0) {
      return 0;
    }
    return this.katas[this.katas.length - 1].id;
  }
}