
/**
 * Module dependencies.
 */

var Canvas = require('canvas')
  , Image = Canvas.Image;

/**
 * Expose `Browser`.
 */

module.exports = Browser;

/**
 * Initialize browser `name`.
 *
 * @param {String} name
 * @api public
 */

function Browser(name) {
  this.name = name;
  this.image = 'logos/' + name + '.png';
  this.versions = [];
  this.padding = 12;
}

/**
 * Pass `version`.
 *
 * @param {String} version
 * @return {Browser} self
 * @api public
 */

Browser.prototype.pass = function(version){
  return this.add('pass', version);
};

/**
 * Fail `version`.
 *
 * @param {String} version
 * @return {Browser} self
 * @api public
 */

Browser.prototype.fail = function(version){
  return this.add('fail', version);
};

/**
 * Add `version` with `type`.
 *
 * @param {String} version
 * @param {String} type
 * @return {Browser} self
 * @api private
 */

Browser.prototype.add = function(type, version){
  this.versions.push({
    type: type,
    string: version
  });

  return this;
};

/**
 * Draw the browser onto `ctx`.
 *
 * @param {String} ctx
 * @param {Object} options
 * @api private
 */

Browser.prototype.draw = function(ctx, options){
  var size = options.size;
  var fontSize = options.fontSize;
  var img = new Image;
  img.src = this.image;

  ctx.translate(this.padding, 0);
  ctx.save();
  ctx.drawImage(img, 0, 0, size, size);
  ctx.translate(10, size * 1.05);
  ctx.font = fontSize + 'px Helvetica';

  this.versions.forEach(function(version){
    ctx.translate(0, fontSize * 1.2);
    ctx.fillStyle = options.colors[version.type];
    ctx.fillText(version.string, 0, 0);
  });

  ctx.restore();
};
