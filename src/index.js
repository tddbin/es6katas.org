import React from 'react';
//import {loadViaAjax} from './katas.js';
import Page from './components/page.js';
import KataLink from './katalink.js';
import KataGroup from './katagroup.js';
import GithubSearchResult from './github-search-result.js';

const render = (err, kataGroups) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={kataGroups}/>, document.body);
  }
};

//loadViaAjax(render);

import data from './for-offline/data.json';
const loadFromFile = (onLoaded) => {
  onLoaded(null, GithubSearchResult.fromJson(data).toKataGroups());
};
loadFromFile(render);

