
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
};
