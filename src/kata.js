const rawPathToEs6KataLink = (path) => {
  return `http://tddbin.com/#?kata=es6/language/${path}`;
};

export default class Kata {
  
  static fromRawItem(rawItem) {
    let kata = new Kata();
    kata.initializePropertiesFromRawItem(rawItem);
    kata.url = rawPathToEs6KataLink(rawItem.path || '');
    kata.id = parseInt(kata.id);
    return kata;
  }
  
  initializePropertiesFromRawItem(rawItem) {
    this.allKeysFromRawItem(rawItem).forEach(key => this[key] = rawItem[key]);
  }

  allKeysFromRawItem(rawItem) {
    return Object.keys(rawItem);
  }
  
}