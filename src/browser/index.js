import 'babel-core/lib/babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import GithubSearchResult from '../github-search-result.js';
import {GITHUB_URL} from '../config.js';

function _renderInBrowser(err, githubJson) {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={GithubSearchResult.toKataGroups(githubJson)}/>, document.querySelector('body'));
  }
}

//import data from '../for-offline/data.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaAjax(GITHUB_URL, _renderInBrowser);
//loadFromFile(_renderInBrowser);
