import React from 'react';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import Metadata from '../metadata.js';
import {METADATA_URL} from '../config.js';

function _renderOnServer(err, metadataJson) {
  if (err) {
    console.log(err);
  } else {
    const preRendered = React.renderToString(<Page kataGroups={Metadata.toKataGroups(metadataJson)}/>);
    console.log(preRendered);
  }
}

//import data from '../for-offline/grouped-metadata.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaNode(METADATA_URL, _renderOnServer);
//loadFromFile(_renderOnServer);