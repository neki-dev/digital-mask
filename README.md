## Digital mask
[![Npm package version](https://badgen.net/npm/v/digital-mask)](https://npmjs.com/package/digital-mask)
[![Small size](https://badge-size.herokuapp.com/neki-dev/digital-mask/master/dist/index.js)](https://github.com/neki-dev/digital-mask/blob/master/dist/index.js)

Easy digital mask for string and inputs

.

* ### Install

```sh
npm i digital-mask
```

* ### Usage for string
```jsx
const { applyStringMask } = require('digital-mask');

const result1 = applyStringMask('1234', '___-___');
console.log(result1); // Output: 123-4__

const result2 = applyStringMask('chars1234and56', '___-___');
console.log(result2); // Output: 123-456
```

* ### Usage for input

```jsx
const { bindInputMask, applyInputMask } = require('digital-mask');

const input = document.getElementById('inputPhone');
const unbind = bindInputMask(input, '___-___');
// ...
unbind();

// OR

const input = document.getElementById('inputPhone');
input.addEventListener('input', () => {
  applyInputMask(input, '___-___');
});
```