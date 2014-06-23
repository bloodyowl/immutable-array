var tape = require("tape")
var ia = require("..")

tape("methods push()", function(test){
  var array = [1, 2, 3]
  var result = ia.push(array, 4, 5, 6)
  test.deepEqual(result, [1, 2, 3, 4, 5, 6])
  test.notEqual(result, array)
  test.end()
})

tape("methods splice()", function(test){
  var array = [1, 2, 3]
  var result = ia.splice(array, 1, 1, 5)
  test.deepEqual(result, [1, 5, 3])
  test.notEqual(result, array)
  test.end()
})

tape("methods sort()", function(test){
  var array = ["c", "a", "b"]
  var result = ia.sort(array)
  test.deepEqual(result, ["a", "b", "c"])
  test.deepEqual(array, ["c", "a", "b"])
  test.notEqual(result, array)
  test.end()
})

tape("methods reverse()", function(test){
  var array = ["c", "b", "a"]
  var result = ia.sort(array)
  test.deepEqual(result, ["a", "b", "c"])
  test.deepEqual(array, ["c", "b", "a"])
  test.notEqual(result, array)
  test.end()
})

tape("methods pop()", function(test){
  var array = ["a", "b", "c"]
  var result = ia.pop(array)
  test.deepEqual(result, ["a", "b"])
  test.deepEqual(array, ["a", "b", "c"])
  test.notEqual(result, array)
  test.end()
})

tape("methods shift()", function(test){
  var array = ["a", "b", "c"]
  var result = ia.shift(array)
  test.deepEqual(result, ["b", "c"])
  test.deepEqual(array, ["a", "b", "c"])
  test.notEqual(result, array)
  test.end()
})

tape("methods unshift()", function(test){
  var array = [1, 2, 3]
  var result = ia.unshift(array, -2, -1, 0)
  test.deepEqual(result, [-2, -1, 0, 1, 2, 3])
  test.deepEqual(array, [1, 2, 3])
  test.notEqual(result, array)
  test.end()
})

tape("methods, accessors", function(test){
  var array = [1, 2, 3]
  var result = ia.slice(array, 0, 1)
  test.deepEqual(result, [1])
  test.deepEqual(array, [1, 2, 3])
  test.notEqual(result, array)
  test.end()
})
