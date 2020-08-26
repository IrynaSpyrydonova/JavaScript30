## Day 05 - JavaScript LocalStorage ✅

### Date 26/08/2020

![LocalStorage](./Screenshot.png)

### Things have been learned:
- `e.preventDefault()` - cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    For example, this can be useful when:

    - Clicking on a "Submit" button, prevent it from submitting a form;
    - Clicking on a link, prevent the link from following the URL;

- The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where it is used:

    In a `method`, this refers to the owner object.
    Alone, this refers to the global object.

    In a `function`, this refers to the global object.

    In a `function`, in `strict mode`, this is undefined.

    In an `event`, this refers to the element that received the event.

    Methods like `call()`, and `apply()` can refer this to any object.

- The `localStorage` property allows you to access a `Storage` object for the `Document's origin`; the stored data is saved `across browser sessions`. `localStorage` is similar to `sessionStorage`, except that while data stored in localStorage has `no expiration time`, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

- The `setItem()` method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

- The `getItem()` method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object

- The `JSON.stringify()` method converts a JavaScript object or value to a JSON string;

- The `JSON.parse()` method parses a JSON string, constructing the JavaScript value or object described by the string.

To challenge myself, I have added the features, suggested by Weight Bose :
- clearAll function - clears all user inputs;
- checkAll -  checks all user inputs;
- uncheckAll - uncheck all user inputs.
