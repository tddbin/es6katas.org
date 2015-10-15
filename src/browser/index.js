import 'babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import Metadata from '../metadata.js';
import {GROUPED_METADATA_URL} from '../config.js';

function _renderInBrowser(err, metadataJson, showWorkshopBanner=false) {
  if (err) {
    console.log(err);
  } else {
    const targetNode = document.getElementById('app');
    const allKataGroups = Metadata.toKataGroups(metadataJson).all();
    React.render(<Page kataGroups={allKataGroups} showWorkshopBanner={showWorkshopBanner}/>, targetNode);
  }
}

//import data from '../for-offline/data.json';
//function loadFromFile(onLoaded) {
//  onLoaded(null, data);
//}

loadViaAjax(GROUPED_METADATA_URL, _renderInBrowser);
//loadFromFile(_renderInBrowser);
