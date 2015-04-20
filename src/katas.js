import atomic from 'atomic';
const ajax = typeof window !== 'undefined' && atomic(window);

const githubUrl = `http://api.github.com/search/code?q=repo%3Atddbin%2Fkatas+language%3AJavaScript+path%3Akatas%2Fes6%2Flanguage`;

export const loadViaAjax = (onLoaded) => {
  ajax.get(githubUrl)
    .success((data) => {
      onLoaded(null, data.items.map((item) => item.path));
    })
    .error((e, xhr) => {
      onLoaded(e);
    })
  ;
};

import http from 'http';
export const loadViaNode = (cb) => {
  var data = '';
  var request = http.get(githubUrl, function(res) {
    res.on('data', function(chunk) {data += chunk;});
    res.on('end', function() {cb(null, data);})
  });
  request.on('error', function(e) { cb(e);});
  request.end();
};