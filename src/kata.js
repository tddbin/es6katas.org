const pathToLink = (path) => {
  const kata = path
    .replace(/^katas\//, '')
    .replace(/\.js$/, '');
  return `http://tddbin.com/#?kata=${kata}`;
};

export default class Kata {
  static fromRawItem(rawItem) {
    let kata = new Kata();
    Object.keys(rawItem).forEach(key => kata[key] = rawItem[key]);
    kata.url = pathToLink(rawItem.path || '');
    return kata;
  }
}