export default class KataGroup extends Array {
 
  static withLinks(name, kataLinks=[]) {
    var group = new KataGroup();
    group.name = name;
    kataLinks.forEach(group.push);
    return group;
  }
  
}