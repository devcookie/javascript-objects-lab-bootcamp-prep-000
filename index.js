var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  //Object.assign(createObject, insertExistingObject, updateObjectWithNewInfo)
  var newRecipe = Object.assign({}, object, {[key]: value})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}