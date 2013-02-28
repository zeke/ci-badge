
/**
 * Module dependencies.
 */

var Browser = require('./browser')
  , Canvas = require('canvas');

module.exports = Badge;

function Badge() {
  this.browsers = [];
}

Badge.prototype.browser = function(name){
  var browser = new Browser(name);
  this.browsers.push(browser);
  return browser;
};

Badge.prototype.render = function(){
  var canvas = new Canvas(this.width(), this.height());
  this.draw(canvas.getContext('2d'));
  return canvas;
};
