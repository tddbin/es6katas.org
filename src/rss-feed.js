import {loadViaNode} from './server/http-get.js';
import Metadata from './metadata.js';
import {FLAT_METADATA_URL} from './config.js';

function _renderOnServer(err, {items: metadata}) {
  if (err) {
    throw new Error(err);
  } else {
    return metadata;
  }
}

loadViaNode(FLAT_METADATA_URL, function(...args) {
  createRss(_renderOnServer(...args));
});




import rss from 'node-rss';

const title = 'ES6 katas';
const link = 'http://es6katas.org';
const description = 'Learn ECMAScript6 by doing it';
const author = 'uxebu';
const feedLink = 'http://es6katas.org/rss/MostRecent.xml';
const options = {}; //{'CustomTag': 'This is a custom tag under the channel tag!'};

function createRss(metadata) {
  let feed = rss.createNewFeed(title, link, description, author, feedLink, options);
  metadata.forEach((kata) => {
    const itemTitle = `${kata.groupName} - ${kata.name}`;
    const analyticsLink = '?utm_source=RSS%20Feed&utm_medium=RSS&utm_campaign=RSS_Syndication';
    const itemLink = `http://tddbin.com/${analyticsLink}#?kata=es6/language/${kata.path}`;
    const pubDate = null;
    const description2 = kata.description;
    feed.addNewItem(itemTitle, itemLink, pubDate, description2, {});
    });
  console.log(rss.getFeedXML(feed));
}