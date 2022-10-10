## Digital mask
[![Npm package version](https://badgen.net/npm/v/digital-mask)](https://npmjs.com/package/digital-mask)
[![Small size](https://badge-size.herokuapp.com/neki-dev/digital-mask/master/dist/index.js)](https://github.com/neki-dev/digital-mask/blob/master/dist/index.js)
[![Testing](https://github.com/neki-dev/digital-mask/actions/workflows/test.yml/badge.svg)](https://github.com/neki-dev/digital-mask/actions/workflows/test.yml)
[![Building](https://github.com/neki-dev/digital-mask/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/digital-mask/actions/workflows/build.yml)

Easy digital mask for string and inputs

.

* ### Install

```sh
npm i digital-mask
```

* ### Usage

```js
/**
 * Return masked value from source string
 */
applyStringMask(
  // Unformatted string
  source: string,
  // Mask for format
  format: string,
  // Сhar from replace
  def: string = '_'
): string

/**
 * Update input value to masked
 */
applyInputMask(
  // Input
  input: HTMLInputElement,
  // Mask for format
  format: string,
  // Сhar from replace
  def: string = '_'
): void

/**
 * Update input value to masked on `input` event
 */
bindInputMask(
  // Input
  input: HTMLInputElement,
  // Mask for format
  format: string,
  // Сhar from replace
  def: string = '_'
): Function
```

* ### Example for string
```jsx
const { applyStringMask } = require('digital-mask');

const result1 = applyStringMask('1234', '___-___');
console.log(result1); // Output: 123-4__

const result2 = applyStringMask('chars1234and56', '___-___');
console.log(result2); // Output: 123-456
```

* ### Example for input

```jsx
const { bindInputMask } = require('digital-mask');

const input = document.getElementById('inputPhone');
const unbind = bindInputMask(input, '___-___');
// ...
unbind();
```
```jsx
const { applyInputMask } = require('digital-mask');

const input = document.getElementById('inputPhone');
input.addEventListener('input', () => {
  applyInputMask(input, '___-___');
});
```