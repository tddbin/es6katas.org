const rawPathToEs6KataLink = (path) => {
  return `http://tddbin.com/#?kata=es6/language/${path}`;
};

export default class Kata {
  
  static fromRawItem(rawItem) {
    let kata = new Kata();
    kata.initializePropertiesFromRawItem(rawItem);
    kata.url = rawPathToEs6KataLink(rawItem.path);
    kata.id = Number.parseInt(kata.id);
    return kata;
  }
  
  initializePropertiesFromRawItem(rawItem) {
    const allRawKeys = Object.keys(rawItem);
    allRawKeys.forEach(key => this[key] = rawItem[key]);
  }

  isNewerKata(otherKata) {
    return otherKata.id > this.id;  
  }
  
}
