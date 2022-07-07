const makeRgb = require('rgb-random-bw/bin');
const urldecode = require('./util.urldecode');

module.exports.getConversionResult = (url) => {
  const { number } = urldecode.urlDecode(url);

  return (number) ? makeRgb.generateRandomRGB(number) : 'try: /?number={number}';
}