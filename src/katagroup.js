export default class KataGroup {
 
  static withLinks(name, kataLinks=[]) {
    var group = new KataGroup();
    group.name = name;
    group.kataLinks = Array.from(kataLinks); // copy the data!
    group.sortByText();
    return group;
  }
  
  static withKatas(groupName, rawKataItems) {
    var group = new KataGroup();
    group.name = groupName;
    group.katas = rawKataItems;
    return group;
  }
  
  sortByText() {
    this.kataLinks.sort(function(link, link1) {
      return link.text < link1.text ? -1 : 1;
    });
  }
  
}