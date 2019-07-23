/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
declare function propAccessor(object: Object, key: string | string[], def?: any): any;
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
declare function propSetter(object: Object, path: string, value: any): Object;
export { propSetter as set, propAccessor as get };
