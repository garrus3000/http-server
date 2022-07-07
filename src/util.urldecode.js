const u = require('url');

const urlDecode = (url) =>{
  const queryObject = u.parse(url, true).query;
  return queryObject;
}

const pathDecode = (url) => {
  const queryObject = u.parse(url, true).pathname;
  return queryObject;
}

module.exports = { urlDecode, pathDecode };