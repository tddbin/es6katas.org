import 'babel-core/lib/babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import Metadata from '../metadata.js';
import {METADATA_URL} from '../config.js';

function _renderInBrowser(err, metadataJson) {
  if (err) {
    console.log(err);
  } else {
    React.render(<Page kataGroups={Metadata.toKataGroups(metadataJson)}/>, document.body);
  }
}

//import data from '../for-offline/data.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaAjax(METADATA_URL, _renderInBrowser);
//loadFromFile(_renderInBrowser);
