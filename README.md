## Easy mask for string
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
  if (!e.target.value) {
    return;
  }
  // Adding mask to string
  const def = '_';
  e.target.value = mask(e.target.value, _MASK_FORMAT_, def);
  // Set cursor to first empty char
  const end = e.target.value.indexOf(def);
  if (end >= 0) {
    e.target.setSelectionRange(end, end);
  }
});
```