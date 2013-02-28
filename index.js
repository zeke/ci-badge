
/**
 * Module dependencies.
 */

var Browser = require('./browser')
  , Canvas = require('canvas')
  , max = require('max-component');

/**
 * Expose `Badge`.
 */

module.exports = Badge;

/**
 * Initialize a new badge.
 *
 * @api public
 */

function Badge() {
  this.browsers = [];
  this.padding = 10;
  this.logoSize = 75;
  this.fontSize = 18;
  this.center = true;
  this.transparent = false;
  this.colors({ pass: '#00a0c1', fail: '#cc2d23' });
}

/**
 * Set `.pass` and `.fail` colors.
 *
 * @param {Object} colors
 * @api public
 */

Badge.prototype.colors = function(colors){
  this._colors = colors;
};

/**
 * Get width.
 *
 * @api public
 */

Badge.prototype.width = function(){
  var pad = this.padding * 2;
  var len = this.browsers.length;
  var bpad = this.browsers[0].padding * len;
  return pad + bpad + (this.logoSize * len);
};

/**
 * Get height.
 *
 * @api public
 */

Badge.prototype.height = function(){
  var n = max(this.browsers, 'versions.length');
  var pad = this.padding * 2;
  return pad + this.logoSize + (n * this.fontSize);
};

/**
 * Add browser `name` and return a `Browser`.
 *
 * @param {String} name
 * @return {Browser}
 * @api public
 */

Badge.prototype.browser = function(name){
  var browser = new Browser(name);
  this.browsers.push(browser);
  return browser;
};

/**
 * Render the badge and return a canvas.
 *
 * @return {Canvas}
 * @api public
 */

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

  ctx.translate(this.padding, this.padding);

  this.browsers.forEach(function(b){
    b.draw(ctx, {
      size: size,
      fontSize: self.fontSize,
      colors: self._colors,
      center: self.center
    });

    ctx.translate(size, 0);
  })

  return canvas;
};
