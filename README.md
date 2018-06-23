# [@fav/prop.defaults-deep][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Copys enumerable own properties of child and descendants of source objects to destination object for destination properties which are undefined or null.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.defaults-deep
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.defaults-deep/` directory manually.*


## Usage

For Node.js:

```js
var defaultsDeep = require('@fav/prop.defaults-deep');
defaultsDeep({ a: 1, b: { c: 2, d: 3 } }, { a: 10, b: { c: 20, e: 40 }, f: 50 });
// => { a: 1, b: { c: 2, d: 3, e: 40 }, f: 50 }
```

For Web browsers:

```html
<script src="fav.prop.defaults-deep.min.js"></script>
<script>
var defaultsDeep = fav.prop.defaultsDeep;
defaultsDeep({ a: 1, b: { c: 2, d: 3 } }, { a: 10, b: { c: 20, e: 40 }, f: 50 });
// => { a: 1, b: { c: 2, d: 3, e: 40 }, f: 50 }
</script>
```


## API

### <u>defaultsDeep(dest [, ...src]) : object</u>

Copys enumerable own properties (both keys and symbols) of child and descendant objects of a source object to a destination object when each property value is null or undefined.
If a property value of a source object is null or undefined, the property is not copied.

***NOTE:*** *This function does not throw an error when copying a source property to a destination property which is read only.*

#### Parameters:

| Parameter |   Type   | Description               |
|-----------|:--------:|---------------------------|
| *dest*    |  object  | The destination object.   |
| *src*     |  object  | The source object(s).     |

#### Returns:

The destination object.

**Type:** object


## Checked                                                                      
### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.defaults-deep/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.defaults-deep
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.defaults-deep.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.defaults-deep
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.defaults-deep?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-defaults-deep
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.defaults-deep/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.defaults-deep?branch=master
