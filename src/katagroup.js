import Kata from './kata.js';

export default class KataGroup {
 
  static withKatas(groupName, rawKataItems) {
    var group = new KataGroup();
    group.name = groupName;
    group.createKatas(rawKataItems);
    group.sort();
    return group;
  }

  createKatas(rawKataItems) {
    this.katas = rawKataItems.map(Kata.fromRawItem);
  }
  
  sort() {
    this.katas.sort(byId);
  }
  
  get newestKata() {
    const reverseById = (kata1, kata2) => kata1.id < kata2.id;
    return this.katas.sort(reverseById)[0];
  }

  get highestId() {
    // Since katas are ALWAYS added to the end, which means the last is the 
    // one with the highest ID, we just get the last one.
    return this.lastId;
  }

  get lastId() {
    return this.katas[this.katas.length - 1].id;
  }
}

const byId = (kata1, kata2) => kata1.id < kata2.id ? -1 : 1;
