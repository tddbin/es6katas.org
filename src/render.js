import React from 'react';
import {loadViaAjax} from './katas.js';
import Page from './components/page.js';
import GithubSearchResult from './github-search-result.js';

const render = (err, kataGroups) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={kataGroups}/>, document.querySelector('body'));
  }
};

//loadViaAjax((err, data) => {
//  render(null, GithubSearchResult.fromJson(data).toKataGroups());
//});

const renderOnServer = (err, kataGroups) => {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToStaticMarkup(<Page kataGroups={kataGroups}/>);
    console.log(preRendered);
  }
};

//loadViaNode((err, data) => {
//  render(null, GithubSearchResult.fromJson(data).toKataGroups());
//});

import data from './for-offline/data.json';
const loadFromFile = (onLoaded) => {
  onLoaded(null, GithubSearchResult.fromJson(data).toKataGroups());
};
export function renderInBrowser() {
  loadFromFile(render);
}

export function renderOnServer() {
  loadFromFile(renderOnServer);
}
