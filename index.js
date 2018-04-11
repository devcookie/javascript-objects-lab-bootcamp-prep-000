var recipes = {
  prop: '1'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipe = Object.assign({}, [key], value)
  return newRecipe
}