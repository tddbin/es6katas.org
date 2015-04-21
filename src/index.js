import React from 'react';
import {loadViaAjax} from './katas.js';
import Page from './components/page.js';

const render = (err, paths) => {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page paths={paths}/>, document.body);
  }
};

loadViaAjax(render);