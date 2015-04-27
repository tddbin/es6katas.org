import React from 'react';
import {loadViaAjax, loadViaNode} from './katas.js';
import Page from './components/page.js';
import GithubSearchResult from './github-search-result.js';

function githubJsonToKataGroups(githubJson) {
  return GithubSearchResult.toKataGroups(githubJson);
}

const _renderInBrowser = (err, githubJson) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={githubJsonToKataGroups(githubJson)}/>, document.querySelector('body'));
  }
};

const _renderOnServer = (err, githubJson) => {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToStaticMarkup(<Page kataGroups={githubJsonToKataGroups(githubJson)}/>);
    console.log(preRendered);
  }
};


import data from './for-offline/data.json';
function loadFromFile(onLoaded) {
  onLoaded(null, githubJsonToKataGroups(data));
}

export function renderInBrowser() {
  loadViaAjax(_renderInBrowser);
}

export function renderOnServer() {
  loadViaNode(_renderOnServer);
}
