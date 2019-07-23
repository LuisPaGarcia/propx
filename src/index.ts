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

/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function propSetter(object: Object, path: string, value: any): Object {
	function pathSeg(path: string): string[] {
		const pathAr: string[] = path.split('.');
		const parts: string[] = [];

		for (let i: number = 0; i < pathAr.length; i++) {
			let p = pathAr[i];

			while (p[p.length - 1] === '\\' && pathAr[i + 1] !== undefined) {
				p = p.slice(0, -1) + '.';
				p += pathAr[++i];
			}

			parts.push(p);
		}

		return parts;
	}
	function isObject(value): boolean {
		const type: string = typeof value;
		return value !== null && (type === 'object' || type === 'function');
	}

	if (!isObject(object) || typeof path !== 'string') {
		return JSON.parse(JSON.stringify(object));
	}

	const ret: Object = object;
	const pathAr: string[] = pathSeg(path);

	for (let i: number = 0; i < pathAr.length; i++) {
		const p = pathAr[i];

		if (!isObject(object[p])) {
			object[p] = {};
		}

		if (i === pathAr.length - 1) {
			object[p] = value;
		}

		object = object[p];
	}

	return JSON.parse(JSON.stringify(ret));
}

export{ propSetter as set, propAccessor as get};