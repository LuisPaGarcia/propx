/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 * @param {*} p counter for loop
 * @param {*} undef undefined by default
 */
function propAccessor(object: Object, key: string | string[], def?: any, p?: number, undef?: undefined) {
	key = (<string>key).split ? (<string>key).split('.') : key;
	for (var p = 0; p < key.length; p++) {
		object = object ? object[key[p]] : undef;
	}
	return object === undef ? def : object;
}

export default propAccessor;
