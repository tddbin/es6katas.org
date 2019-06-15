import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {GROUPED_METADATA_URL} from '../config.js';

function _renderOnServer(err, metadataJson) {
  if (err) {
    throw new Error(err);
  } else {
    return ReactDOMServer.renderToString(<Page kataGroups={RawMetadata.toKataGroups(metadataJson)}/>);
  }
}

export function render(onDone) {
  loadViaNode(GROUPED_METADATA_URL, function(...args) {
    onDone(_renderOnServer(...args));
  });
}