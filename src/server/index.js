import React from 'react';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import Metadata from '../metadata.js';
import {METADATA_URL} from '../config.js';

function _renderOnServer(err, metadataJson) {
  if (err) {
    throw new Error(err);
  } else {
    return React.renderToString(<Page kataGroups={Metadata.toKataGroups(metadataJson)} showWorkshopBanner={false}/>);
  }
}

//import data from '../for-offline/grouped-metadata.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

export function render(onDone) {
  //loadViaNode(METADATA_URL, (...args) => {onDone(_renderOnServer(...args))});
  loadViaNode(METADATA_URL, function(...args) {
    onDone(_renderOnServer(...args));
  });
}
//loadFromFile(_renderOnServer);