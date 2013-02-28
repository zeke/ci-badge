
/**
 * Module dependencies.
 */

var Browser = require('./browser')
  , Canvas = require('canvas')
  , max = require('max-component');

module.exports = Badge;

function Badge() {
  this.browsers = [];
  this.columnWidth = 50;
  this.versionHeight = 15;
}

Badge.prototype.width = function(){
  return this.columnWidth * this.browsers.length;
};

Badge.prototype.height = function(){
  var n = max(this.browsers, 'versions.length');
  return this.columnWidth + (n * this.versionHeight);
};

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
