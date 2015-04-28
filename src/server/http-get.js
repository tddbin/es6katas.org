import https from 'https';
import url from 'url';

export const loadViaNode = (fileUrl, onLoaded) => {
  let data = '';
  let options = url.parse(fileUrl);
  options.headers = {'User-Agent': ''}; // github wants a user agent header
  var request = https.request(options, function(res) {
    res.on('data', function(chunk) {data += chunk;});
    res.on('end', function() {onLoaded(null, JSON.parse(data));})
  });
  request.on('error', function(e) { onLoaded(e); });
  request.end();
};
