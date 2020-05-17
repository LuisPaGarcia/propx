/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
function propAccessor(object: Object, key: string | string[], def?: any) {
	key = (<string>key).split ? (<string>key).split('.') : key;
	for (var p = 0; p < key.length; p++) {
		object = object ? object[key[p]] : undefined;
	}
	return object === undefined ? def : object;
}

export { propAccessor as get };