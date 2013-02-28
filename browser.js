
/**
 * Module dependencies.
 */

var Canvas = require('canvas')
  , Image = Canvas.Image;

module.exports = Browser;

function Browser(name) {
  this.name = name;
  this.image = 'logos/' + name + '.png';
  this.versions = [];
}

Browser.prototype.pass = function(version){
  return this.add('pass', version);
};

Browser.prototype.fail = function(version){
  return this.add('fail', version);
};

Browser.prototype.add = function(type, version){
  this.versions.push({
    type: type,
    version: version
  });

  return this;
};

Browser.prototype.draw = function(ctx, options){
  var size = options.size;
  var fontSize = options.fontSize;
  var img = new Image;
  img.src = this.image;

  ctx.drawImage(img, 0, 0, size, size);
};
