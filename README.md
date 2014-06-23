# immutable-array

[![Build Status](https://travis-ci.org/bloodyowl/immutable-array.svg)](https://travis-ci.org/bloodyowl/immutable-array)

[![browser support](https://ci.testling.com/bloodyowl/immutable-array.png)
](https://ci.testling.com/bloodyowl/immutable-array)

makes array mutators method act like accessors.
this way you're able to work on array as immutable
structures.

## install

```sh
$ npm install bloody-immutable-array
```

## require

```sh
var ia = require("bloody-immutable-array")
```

## api

### ~mutators~ kind of

all return the new array.

- `ia.push(array, …args…)`
- `ia.splice(array, …args…)`
- `ia.sort(array, …args…)`
- `ia.reverse(array, …args…)`
- `ia.pop(array, …args…)`
- `ia.shift(array, …args…)`
- `ia.unshift(array, …args…)`

### accessors

return what their native methods do

- `ia.reduceRight(array, …args…)`
- `ia.toLocaleString(array, …args…)`
- `ia.some(array, …args…)`
- `ia.forEach(array, …args…)`
- `ia.map(array, …args…)`
- `ia.lastIndexOf(array, …args…)`
- `ia.toString(array, …args…)`
- `ia.join(array, …args…)`
- `ia.reduce(array, …args…)`
- `ia.slice(array, …args…)`
- `ia.filter(array, …args…)`
- `ia.every(array, …args…)`

## example

```javascript
var ia = require("bloody-immutable-array")

var arr = [1, 2, 3]
var pushed = ia.push(arr, 4, 5, 6) // [1, 2, 3, 4, 5, 6]
pushed == array // false
```
