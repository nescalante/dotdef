# dotdef [![Build Status](https://travis-ci.org/nescalante/dotdef.svg?branch=master)](https://travis-ci.org/nescalante/dotdef) [![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/dotdef.svg)](https://greenkeeper.io/)

> Dot definition for objects

# Install

Use it as an npm package:

```shell
npm install dotdef
```

# Usage

```js
const dotdef = require('dotdef');

const myObj = dotdef({
  'foo.bar.baz': 123,
  'foo.bar.quux': 456
}); // { foo: { bar: { baz: 123, quux: 456 } } }
```

# License

MIT
