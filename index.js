var recipes = {
  'prop': '1'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipe = Object.assign(object, [key], value)
  return newRecipe
}