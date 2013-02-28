
# ci-badge

  Browser CI badge generation using node-canvas.

  ![](http://cdn.dropmark.com/41933/4243338cf156b1fd92f1b4307928d1d376c4de14/small.png)

## Installation

```
$ npm install ci-badge
```

## Example

```js
var Badge = require('ci-badge');
var fs = require('fs');

var badge = new Badge;

badge
  .browser('chrome')
  .pass('14.0')
  .pass('15.0')
  .fail('16.0')
  .pass('nightly')

badge
  .browser('safari')
  .pass('5.0.5')
  .fail('5.1.0')
  .pass('5.1.1')

badge
  .browser('firefox')
  .pass('10.0')
  .pass('11.0')
  .pass('12.0')
  .pass('13.0')
  .pass('14.0')

badge
  .browser('ie')
  .fail('7.0')
  .fail('8.0')
  .fail('9.0')

badge
  .browser('opera')
  .pass('10.6')
  .pass('11.0')

fs.writeFile('out.png', badge.render().toBuffer());
````

# License

  MIT
