/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
declare function propSetter(object: Object, path: string, value: any): Object;
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
