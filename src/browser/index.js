import 'babel-core/lib/babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import Metadata from '../metadata.js';
import {GROUPED_METADATA_URL} from '../config.js';

function _renderInBrowser(err, metadataJson, showWorkshopBanner=false) {
  if (err) {
    console.log(err);
  } else {
    if (navigator.language.startsWith('de')) {
      setTimeout(() => {
        _renderInBrowser(null, metadataJson, true);
      }, 1000);
    }
    const targetNode = document.getElementById('app');
    React.render(<Page kataGroups={Metadata.toKataGroups(metadataJson)} showWorkshopBanner={showWorkshopBanner}/>, targetNode);
  }
}

//import data from '../for-offline/data.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaAjax(GROUPED_METADATA_URL, _renderInBrowser);
//loadFromFile(_renderInBrowser);
