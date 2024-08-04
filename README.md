## ⚡ Digital mask
[![Version](https://badgen.net/npm/v/digital-mask)](https://npmjs.com/package/digital-mask)
[![Size](https://img.badgesize.io/neki-dev/digital-mask/master/dist/index.js)](https://github.com/neki-dev/digital-mask/blob/master/dist/index.js)
[![Test](https://github.com/neki-dev/digital-mask/actions/workflows/test.yml/badge.svg)](https://github.com/neki-dev/digital-mask/actions/workflows/test.yml)
[![Build](https://github.com/neki-dev/digital-mask/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/digital-mask/actions/workflows/build.yml)

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
```

* ### Example for string
```ts
import { applyStringMask } from 'digital-mask';

applyStringMask('1234', '___-___'); 
// => 123-4__

applyStringMask('1234', '***-***', '*'); 
// => 123-4**

applyStringMask('chars1234and56', '___-___'); 
// => 123-456
```

* ### Example for input

```ts
import { applyInputMask } from 'digital-mask';

const input = document.getElementById('inputPhone');
input.addEventListener('input', (event) => {
  applyInputMask(event.target, '___-___');
});
```