/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
declare function set(object: Object, path: string, value: any): Object;
/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
declare function get(object: Object, key: string | string[], def?: any): any;
export { get, set };
