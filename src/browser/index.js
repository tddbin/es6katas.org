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
    const allKataGroups = Metadata.toKataGroups(metadataJson);
    React.render(<Page kataGroups={allKataGroups} showWorkshopBanner={showWorkshopBanner}/>, targetNode);
  }
}

loadViaAjax(GROUPED_METADATA_URL, _renderInBrowser);
