/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function propSetter(object, path, value) {
  function pathSeg(path) {
    const pathAr = path.split('.');
    const parts = [];

    for (let i = 0; i < pathAr.length; i++) {
      let p = pathAr[i];

      while (p[p.length - 1] === '\\' && pathAr[i + 1] !== undefined) {
        p = p.slice(0, -1) + '.';
        p += pathAr[++i];
      }

      parts.push(p);
    }

    return parts;
  }
  function isObject(value) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
  }

  if (!isObject(object) || typeof path !== 'string') {
    return object;
  }

  const ret = object;
  const pathAr = pathSeg(path);

  for (let i = 0; i < pathAr.length; i++) {
    const p = pathAr[i];

    if (!isObject(object[p])) {
      object[p] = {};
    }

    if (i === pathAr.length - 1) {
      object[p] = value;
    }

    object = object[p];
  }

  return ret;
}

export default propSetter;

/**
 * const biz = propSetter({}, 'obj1.obj2', 'c');
 * console.log(biz);
 * // {obj1: {obj2: 'c'}}
 *
 * const object = {rep: {bar: 'a'}};
 * propSetter(object, 'rep.bar', 'b');
 * console.log(object);
 * // {rep: {bar: 'b'}}
 */
