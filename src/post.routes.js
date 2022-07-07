const conversions = require('./util.argument');
const urldecode = require('./util.urldecode');

module.exports.post = (url, res) => {
  const path = urldecode.pathDecode(url);
  
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/text' });
    res.end(conversions.getConversionResult(url));
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/text' });
    res.end(JSON.stringify({ message: ` Endpoint not found: ${ url }` }));
  }
};