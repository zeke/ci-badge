
/**
 * Module dependencies.
 */

var Browser = require('./browser')
  , Canvas = require('canvas')
  , max = require('max-component');

module.exports = Badge;

function Badge() {
  this.browsers = [];
  this.columnWidth = 100;
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
  var self = this;
  var w = this.width();
  var h = this.height();
  var canvas = new Canvas(w, h);
  var ctx = canvas.getContext('2d');
  var size = this.columnWidth;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);

  this.browsers.forEach(function(b){
    b.draw(ctx, {
      size: size,
      fontSize: self.versionHeight
    });

    ctx.translate(size, 0);
  })

  return canvas;
};
