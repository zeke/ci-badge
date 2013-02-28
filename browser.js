
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
  this.padding = 12;
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
    string: version
  });

  return this;
};

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
    ctx.fillStyle = 'black';
    ctx.fillText(version.string, 0, 0);
  });

  ctx.restore();
};
