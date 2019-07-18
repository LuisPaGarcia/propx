/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
declare function propAccessor(object: Object, key: string | string[], def?: any): any;
export default propAccessor;
