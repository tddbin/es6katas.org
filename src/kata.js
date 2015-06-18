export default class Kata {
  static fromRawItem(rawItem) {
    let kata = new Kata();
    kata.name = rawItem.name;
    return kata;
  }
}