## Day 06 - JavaScript Key Sequence Detection ✅

### Date 14/08/2020

![Key Sequence Detection](./Screenshot.png)

### Things have been learned:

- The s`plice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax 

```js
let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```

He used here `-secretCode.length -1` to start with, but according to MDN's explanation, it could have been replaced with just 0.

>If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

>  MDN