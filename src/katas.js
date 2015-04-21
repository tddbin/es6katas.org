import atomic from 'atomic';
const ajax = typeof window !== 'undefined' && atomic(window);

const githubUrl = `https://api.github.com/search/code?q=repo%3Atddbin%2Fkatas+language%3AJavaScript+path%3Akatas%2Fes6%2Flanguage`;

export const loadViaAjax = (onLoaded) => {
  ajax.get(githubUrl)
    .success((data) => {
      onLoaded(null, extractPathOnly(data));
    })
    .error((e, xhr) => {
      onLoaded(e);
    })
  ;
};

import https from 'https';
import url from 'url';
export const loadViaNode = (cb) => {
  let data = '';
  let options = url.parse(githubUrl);
  options.headers = {'User-Agent': ''}; // github wants a user agent header
  var request = https.request(options, function(res) {
    res.on('data', function(chunk) {data += chunk;});
    res.on('end', function() {cb(null, extractPathOnly(JSON.parse(data)));})
  });
  request.on('error', function(e) { cb(e); });
  request.end();
};

const extractPathOnly = (data) => data.items.map((item) => item.path);