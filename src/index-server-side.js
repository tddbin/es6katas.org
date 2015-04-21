import React from 'react';
import {loadViaNode} from './katas.js';
import Page from './components/page.js';

const render = (err, paths) => {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToString(<Page paths={paths}/>);
    console.log(preRendered);
  }
};

loadViaNode(render);