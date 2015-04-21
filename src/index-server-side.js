import React from 'react';
import {loadViaNode} from './katas.js';
import MainComponent from './page.js';

const render = (err, paths) => {
  if (err) {
    console.log(err);
  } else {
    React.renderToString(<MainComponent paths={paths}/>);
  }
};

loadViaNode(render);