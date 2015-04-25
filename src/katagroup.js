export default class KataGroup {
 
  static withLinks(name, kataLinks) {
    var group = new KataGroup();
    group.name = name;
    group.kataLinks = kataLinks;
    return group;
  }
  
}