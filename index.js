var slice = [].slice
var mutators = [
  "push",
  "splice",
  "sort",
  "reverse",
  "pop",
  "shift",
  "unshift"
]

var accessors = [
  "reduceRight",
  "toLocaleString",
  "some",
  "forEach",
  "map",
  "lastIndexOf",
  "toString",
  "join",
  "reduce",
  "slice",
  "filter",
  "every"
]

function createMutatorCallback(method){
  return function(array){
    var result = array == null ? [] : array.concat()
    result[method].apply(result, slice.call(arguments, 1))
    return result
  }
}

function createAccessorCallback(method){
  return function(array){
    if(array == null) {
      array = []
    }
    return array[method].apply(
      array,
      slice.call(arguments, 1)
    )
  }
}

var index = -1
var length = mutators.length
while(++index < length) {
  exports[mutators[index]] = createMutatorCallback(mutators[index])
}

var index = -1
var length = accessors.length
while(++index < length) {
  exports[accessors[index]] = createAccessorCallback(accessors[index])
}
