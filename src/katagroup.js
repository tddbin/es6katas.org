export default class KataGroup {
 
  static withLinks(name, kataLinks=[]) {
    var group = new KataGroup();
    group.name = name;
    group.kataLinks = kataLinks;
    group.sortByText();
    return group;
  }
  
  sortByText() {
    this.kataLinks.sort(function(link, link1) {
      return link.text < link1.text ? -1 : 1;
    });
  }
  
}