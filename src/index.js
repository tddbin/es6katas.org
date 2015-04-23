import React from 'react';
//import {loadViaAjax} from './katas.js';
import Page from './components/page.js';

const render = (err, kataGroups) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={kataGroups}/>, document.body);
  }
};

//loadViaAjax(render);

export const getPathList = (githubJson) => {
  return githubJson.items.map((item) => item.path);
};

export const toKataGroups = (paths) => {
  let groups = {};
  paths.forEach((path) => {
    const groupName = path.split('/').reverse()[1];
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(path);
  });
  return groups;
};

import data from './for-offline/data.json';
const loadFromFile = (onLoaded) => {
  const pathList = getPathList(data);
  const groups = toKataGroups(pathList);
  const sortedGroups = [];
  for (let group in groups) {
    sortedGroups.push({
      name: group,
      kataLinks: groups[group].map((path) => pathToLink(path))
    });
  }
  onLoaded(null, sortedGroups);
};
//loadFromFile(render);

