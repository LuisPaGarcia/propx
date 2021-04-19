/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
declare function propSetter(object: Object, path: string, value: any): Object;
export { propSetter as set };
