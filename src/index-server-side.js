import React from 'react';
import {loadViaNode} from './katas.js';
import Page from './components/page.js';
import GithubSearchResult from './github-search-result.js';

const render = (err, kataGroups) => {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToString(<Page kataGroups={kataGroups}/>);
    console.log(preRendered);
  }
};

loadViaNode((err, data) => {
  render(null, GithubSearchResult.fromJson(data).toKataGroups());
});
