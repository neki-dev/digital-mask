## Easy digital mask for string
.

* ### Install

```sh
npm i digital-mask
```

* ### Usage for string
```jsx
const mask = require('digital-mask');
const result = mask('5a599 9', '__-___');
console.log(result); // 55-999
```

* ### Usage for input

```jsx
const mask = require('digital-mask');
_INPUT_.addEventListener('input', (e) => {
  mask.to(e.target, _MASK_FORMAT_);
});
```
