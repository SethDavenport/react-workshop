# ImmutableJS Overview

### Index
  1. Mutable vs. Immutable
  2. Persistent Data Structures?
  3. Structure Data Sharing
  4. ImmutableJS API
  5. Build it into todo App (undo, time machine)

### Mutable vs. Immutable

**Mutable** data can be changed by replacing it's old data with new one. Mutation of data makes application development difficult because it makes the following things hard:

1. Keeping track of mutated data, and
2. Maintaining application state

**Immutable** data cannot be changed, but it can only be copied and then tempered with. The original data is deleted only if we lose the reference to it.

In JavaScript we have 6 primitive data types:

  1. Boolean
  2. Number
  3. String
  4. Symbol
  5. Null
  6. Undefined

**Note:**`Symbol was introduced in ECMAScript 6`

All of these primitive data types are **immutable** which means that their values cannot be changed but instead new values are created. For example, assign a string literal `"Hello"` to a variable `str` and then attempt to change the first character to "Y":

```javascript
var str = 'Hello';
str[0] = 'Y';
console.log(str);
```
**This would output:**

`Hello`

The only way to manipulate with the value of the string is through methods such as `trim`, `slice`, `replace` etc. However, even with those methods the original value does not change:

```javascript
var str1 = 'Hello';
var str2 = str1.replace('H', 'Y');
console.log(str1); // This outputs `Hello`
console.log(str2); // This outputs `Yello`
```

In JavaScript, objects and arrays are **mutable**
```javascript
var arr = [1, 2, 3];
var abc = arr.push(4);
console.log(abc);
```
If Array was immutable, pushing an element onto it would  return a new array `[1, 2, 3, 4]` i.e. `arr.push(4)` would return `[1, 2, 3, 4]` to `abc`.
However, this is not the case in JavaScript and in out previos example, `abc` would be set to `4`, which is the emenent that was pushed onto the array.
So with **mutable** data we lose the notion of **time**. In fact mutable data combines **value** and **time**, hence we don't have **OLD** data and **NEW** data, but only one which is the last edited one.

