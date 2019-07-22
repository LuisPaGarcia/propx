# Safely accessing deeply nested values ⚡️

1. Install it using npm:

```bash
$ npm install propx 
```

 or yarn:
```bash
$ yarn add propx 
```

## Usage

```javascript
// Using require
const { set, get } = require('propx');

// Using import (es6)
import { set, get } from 'propx';

// Target example
const obj = {
    a: 1,
    b: 2,
    c: { d: { e: { f: 3 } } },
    g: undefined
};

// How to use get
console.log(get(obj, 'c.d.e.f', ''))
//-> 3

// How to use set
console.log(set(obj, 'g.x.y.z', ['hey']))
/* -> {
    a: 1,
    b: 2,
    c: { d: { e: { f: 3 } } },
    g: { x: { y: { z: [ 'hey' ] } } }
}

*/
```

## Definition

```javascript
/**
 * @param {object} object base object to inject new prop
 * @param {string} path path to set the object
 * @param {any} value value to set
 */
function set(object: Object, path: string, value: any): Object {
    ...
}

/**
 *
 * @param {object} object object to access
 * @param { string | string[] } key string or array with dot notation path
 * @param { any } def optional parameter for default if the full key in path is missing
 */
function get(object: Object, key: string | string[], def: any) {
...
}

```

## TODO:
- [ ] Write tests
- [ ] Use `microbundle` to generate module units.
- [ ] Configure umd ussage for `unpkg.com`.
