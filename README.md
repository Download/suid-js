# suid-js
### Javascript implementation of Scoped Unique IDs

**Suids are distributed, Scoped, Unique IDs that are short and sweet.**

> See the main [project](https://download.github.io/suid/) for details.

[![version](https://img.shields.io/npm/v/suid-js.svg)](https://npmjs.org/package/suid-js)
[![license](https://img.shields.io/badge/license-CC--BY--4.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![build status](https://api.travis-ci.org/Download/suid-js.svg?branch=master)](https://travis-ci.org/Download/suid-js)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)


## Install
```sh
npm install --save suid-js
```

## Require
```js
var Suid = require('suid-js')
```

## Import
```js
import Suid from 'suid-js'
```

## Use
* [Create a Suid from a number](#create-a-suid-from-a-number)
* [Create a Suid from a string](#create-a-suid-from-a-string)
* [Get a Suid's underlying value](#get-a-suid-s-underlying-value)
* [Convert a Suid to a number](#convert-a-suid-to-a-number)
* [Convert a Suid to a string](#convert-a-suid-to-a-string)
* [Convert a Suid array to a number array](#convert-a-suid-array-to-a-number-array)
* [Convert a Suid array to a string array](#convert-a-suid-array-to-a-string-array)
* [Convert a number array to a Suid array](#convert-a-number-array-to-a-suid-array)
* [Convert a string array to a Suid array](#convert-a-string-array-to-a-suid-array)

### Create a Suid from a number
```js
var id = new Suid(1903154)
alert(id) // 14she
```

### Create a Suid from a string
```js
var id = new Suid('14she')
alert(id) // 14she
```

### Get a Suid's underlying value
```js
var id = new Suid("14she")
alert(id.value) // 1903154
```

### Convert a Suid to a number
```js
var id = new Suid('14she')
var val = id.toNumber()
alert(val) // 1903154
```

### Convert a Suid to a String
```js
var id = new Suid('14she')
var val = id.toString()
alert(val) // 14she
```

### Convert a Suid array to a number array
```js
var ids = [new Suid(1903154), new Suid(1903155), new Suid(1903156)]
alert(ids)  // [14she, 14shf, 14shg]
var vals = Suid.toNumber(ids)
alert(vals) // [1903154, 1903155, 1903156]
```

### Convert a Suid array to a string array
```js
var ids = [new Suid(1903154), new Suid(1903155), new Suid(1903156)]
alert(ids)  // [14she, 14shf, 14shg]
var vals = Suid.toString(ids)
alert(vals) // [14she, 14shf, 14shg]
```

### Convert a number array to a Suid array
```js
var vals = [1903154, 1903155, 1903156]
alert(vals) // [1903154, 1903155, 1903156]
var ids = Suid.from(vals)
alert(ids)  // [14she, 14shf, 14shg]
```

### Convert a string array to a Suid array
```js
var vals = ['14she', '14shf', '14shg']
alert(vals) // [14she, 14shf, 14shg]
var ids = Suid.from(vals)
alert(ids)  // [14she, 14shf, 14shg]
```

## Issues
Bugs, feedback, questions and discussion are welcome on the [issue tracker](https://github.com/download/suid-js/issues).

## Copyright
Copyright (c) 2017 by [Stijn de Witt](http://stijndewitt.com). Some rights reserved.

## License
Creative Commons Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/

