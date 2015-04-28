import React from 'react';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import GithubSearchResult from '../github-search-result.js';
import {GITHUB_URL} from '../config.js';

function _renderOnServer(err, githubJson) {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToStaticMarkup(<Page kataGroups={GithubSearchResult.toKataGroups(githubJson)}/>);
    console.log(preRendered);
  }
}

//import data from '../for-offline/data.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaNode(GITHUB_URL, _renderOnServer);
//loadFromFile(_renderOnServer);