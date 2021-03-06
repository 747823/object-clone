# object-clone
object-clone is a small package for cloning js objects

### Introduction
Normally when you assign an object to a new variable in Javascript, the original variable and the new variable will both point to the same object in memory. So for example:
```
var x = { y: { z: 0 } };
var test = x;
test.y.z = 2;
// x.y.z === 2
```

We don't always want the above behavior, and sometimes it's very inconvenient. This package adds an Object.clone method which returns a totally new object, not a reference to the original.

###Usage
```
require('object-clone');

var x = { y: { z: 0 } };
var test = Object.clone( x );
test.y.z = 2;
// test.y.z === 2
// x.y.z === 0
```

###Notes
* Test cases have been added in version 1.0.0 so it should be relatively reliable now
* Passing an object with circular references into Object.clone will now throw a TypeError instead of looping forever

###Version Updates
* 1.0.0: 
	* Added fixed and random tests
	* Fixed a bug that would attempt to call a constructor for null values
	* Added error handling for circular referenes
* 0.1.2: 
	* Enabled strict mode and fixed a bug where the key variable in the for..in loop was put in the global scope
