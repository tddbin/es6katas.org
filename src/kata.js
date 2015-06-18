export default class Kata {
  static fromRawItem(rawItem) {
    let kata = new Kata();
    Object.keys(rawItem).forEach(key => kata[key] = rawItem[key]);
    return kata;
  }
}