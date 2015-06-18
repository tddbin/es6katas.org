import http from 'http';
import url from 'url';
import fs from 'fs';

export const loadViaNode = (fileUrl, onLoaded) => {
  let data = '';
  let options = url.parse(fileUrl);
  options.headers = {'User-Agent': ''}; // github wants a user agent header
  var request = http.request(options, function(res) {
    res.on('data', function(chunk) {data += chunk;});
    res.on('end', function() {
      const parsed = JSON.parse(data);
      if (!parsed.items) {
        onLoaded(null, JSON.parse(fs.readFileSync('../for-offline/grouped-metadata.json')));
      } else {
        onLoaded(null, parsed);
      }
    })
  });
  request.on('error', function(e) { onLoaded(e); });
  request.end();
};
