import React from 'react';
//import {loadViaAjax} from './katas.js';
import Page from './components/page.js';
import KataLink from './katalink.js';
import KataGroup from './katagroup.js';

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
  for (let groupName in groups) {
    const kataLinks = groups[groupName].map((path) => KataLink.fromPath(path));
    const kataGroup = KataGroup.withLinks(groupName, kataLinks);
    sortedGroups.push(kataGroup);
  }
  onLoaded(null, sortedGroups);
};
//loadFromFile(render);

