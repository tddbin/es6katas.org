import atomic from 'atomic';
atomic = atomic(window);

const url = `https://api.github.com/search/code?q=repo%3Atddbin%2Fkatas+language%3AJavaScript+path%3Akatas%2Fes6%2Flanguage`;

atomic.get(url)
  .success((data) => {
    render(data.items.map((item) => item.path));
  })
  .error((e, xhr) => {
    console.log(':(', xhr);
  })
;

import React from 'react';

export default class MainComponent extends React.Component {

  render() {
    let {paths} = this.props;
    return (
      <ol>
        {paths.map((path) => <li>{tddbinKataLink(path)}</li>)}
      </ol>
    );
  }
}

const tddbinKataLink = (path) => {
  const readable = path.replace('katas/es6/language/', '');
  const link = `http://tddbin.com/#?kata=${path.replace('katas/', '').replace(/\.js$/, '')}`;
  return <a href={link} target="_blank">{readable}</a>;
};

const render = (paths) => {
  React.render(<MainComponent paths={paths}/>, document.querySelector('#katas'));
};
