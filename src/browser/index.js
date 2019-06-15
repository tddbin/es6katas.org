import 'babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {GROUPED_METADATA_URL} from '../config.js';

function _renderInBrowser(err, metadataJson) {
  if (err) {
    console.log(err);
  } else {
    const targetNode = document.getElementById('app');
    const allKataGroups = RawMetadata.toKataGroups(metadataJson);
    React.render(<Page kataGroups={allKataGroups}/>, targetNode);
  }
}

loadViaAjax(GROUPED_METADATA_URL, _renderInBrowser);
