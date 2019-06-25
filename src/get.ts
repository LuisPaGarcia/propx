/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 * @param {*} p counter for loop
 * @param {*} undef undefined by default
 */
function propAccessor(object, key, def, p, undef) {
  key = key.split ? key.split('.') : key;
  for (p = 0; p < key.length; p++) {
    object = object ? object[key[p]] : undef;
  }
  return object === undef ? def : object;
}

export default propAccessor;
