const pathToLink = (path) => {
  const kata = path.replace(/^katas\//, '').replace(/\.js$/, '');
  const text = kata.split('/').reverse()[0];
  return {
    text: text,
    url: `http://tddbin.com/#?kata=${kata}`
  };
};

export default class KataLink {
  
  static fromPath(path) {
    const link = new KataLink();
    const {text, url} = pathToLink(path);
    link.text = text;
    link.url = url;
    return link;
  }
  
}
