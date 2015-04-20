import React from 'react';
import {loadViaAjax} from './katas.js';
import MainComponent from './page.js';

const render = (err, paths) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<MainComponent paths={paths}/>, document.body);
  }
};

loadViaAjax(render);