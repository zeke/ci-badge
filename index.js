
/**
 * Module dependencies.
 */

var Browser = require('./browser')
  , Canvas = require('canvas')
  , max = require('max-component');

module.exports = Badge;

function Badge() {
  this.browsers = [];
  this.logoSize = 75;
  this.fontSize = 20;
  this.transparent = false;
}

Badge.prototype.width = function(){
  return this.logoSize * this.browsers.length;
};

Badge.prototype.height = function(){
  var n = max(this.browsers, 'versions.length');
  return this.logoSize + (n * this.fontSize);
};

Badge.prototype.browser = function(name){
  var browser = new Browser(name);
  this.browsers.push(browser);
  return browser;
};

Badge.prototype.render = function(){
  var self = this;
  var w = this.width();
  var h = this.height() * 1.2;
  var canvas = new Canvas(w, h);
  var ctx = canvas.getContext('2d');
  var size = this.logoSize;

  if (!this.transparent) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, w, h);
  }

  this.browsers.forEach(function(b){
    b.draw(ctx, {
      size: size,
      fontSize: self.fontSize
    });

    ctx.translate(size, 0);
  })

  return canvas;
};
