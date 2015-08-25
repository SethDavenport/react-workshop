# ImmutableJS Overview

### Index
  1. Mutable vs. Immutable
  2. Persistent Data Structures
  3. Structure Data Sharing
  4. ImmutableJS API
  5. Build it into To-Do App (undo, time machine)

### Mutable vs. Immutable

**Mutable** data can be changed by replacing itself with new one. Mutation of data makes application development difficult because it makes the following things hard:

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

All of these primitive data types are **immutable** their values cannot be changed but instead new values are created. For example, assign a string literal `"Hello"` to a variable `str` and then attempt to change the first character to `"Y"`:

```javascript
var str = 'Hello';
str[0] = 'Y';
console.log(str); // Hello
```

The only way to manipulate strings is through methods such as `trim`, `slice`, `replace` etc. However, even with those methods the original value does not change:

```javascript
var str1 = 'Hello';
var str2 = str1.replace('H', 'Y');
console.log(str1); // This outputs `Hello` <= this value has not changed
console.log(str2); // This outputs `Yello`
```

In JavaScript, **objects** and **arrays** are **mutable**
```javascript
var arr = [1, 2, 3];
var abc = arr.push(4);

console.log(arr); // [1, 2, 3, 4] <= arr was modified
console.log(abc); // 4            <= We have lost the original array!!
```

With **mutable** data we lose the notion of **time**. In fact mutable data combines **value** and **time**, hence we don't have **OLD** data and **NEW** data, but only the latest.

### Persistent Data Structures

Persistent data structures provides operators which allow users to perform certain manipulation to the data without changing the original and returns the newly updated one. Such data structure is effectively **immutable**.

From our previous example of `Array` was immutable then pushing an element onto it would return a new array `[1, 2, 3, 4]` i.e. `arr.push(4)` would return `[1, 2, 3, 4]` to `abc`.

Ideally we want something like this:
```javascript
var arr = ImmutableArray([1, 2, 3]);
var newArr = arr.push(4);

console.log(arr); // [1,2,3] <= The old array is preserved
console.log(newArr); // [1, 2, 3, 4] <= the new modified array
```

