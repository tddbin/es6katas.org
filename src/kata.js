const pathToLink = (path) => {
  return `http://tddbin.com/#?kata=es6/language/${path}`;
};

export default class Kata {
  static fromRawItem(rawItem) {
    let kata = new Kata();
    Object.keys(rawItem).forEach(key => kata[key] = rawItem[key]);
    kata.url = pathToLink(rawItem.path || '');
    return kata;
  }
}