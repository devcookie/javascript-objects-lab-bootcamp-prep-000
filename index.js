var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipe = Object.assign(object, [key], value)
  return newRecipe
}