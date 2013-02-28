
/**
 * Module dependencies.
 */

var Badge = require('./');
var fs = require('fs');

var badge = new Badge;

badge
  .browser('chrome')
  .pass('14.0')
  .pass('15.0')
  .fail('16.0')
  .fail('nightly')

badge
  .browser('safari')
  .pass('5.0.5')
  .fail('5.1.0')
  .pass('5.1.1')

badge
  .browser('opera')
  .pass('10.6')
  .pass('11.0')

badge
  .browser('ie')
  .pass('7.0')
  .pass('8.0')
  .pass('9.0')

fs.writeFile('out.png', badge.render().toBuffer());
