# object-clone
object-clone is a small package for cloning js objects

### Introduction
Normally when you assign an object to a new variable in Javascript, the original variable and the new variable will both point to the same object in memory. So for example:
```
var x = { y: { z: 0 } };
var test = x;
test.y.z = 2;
// Now x.y.z === 2 because they're both references to the same underlying object
// But we don't always want that behavior!
```

This package adds an Object.clone method which returns a totally new object, not a reference to the original.

###Usage
```
require('object-clone');

var x = { y: { z: 0 } };
var test = Object.clone( x );
test.y.z = 2;
// Now test.y.z is 2, and x.y.z is still 0 because they're different objects
```

###Version Updates
* 1.0.0: 
	* Added fixed and random tests
	* Fixed a bug that would attempt to call a constructor for null values
	* Added error handling for circular referenes
* 0.1.2: 
	* Enabled strict mode and fixed a bug where the key variable in the for..in loop was put in the global scope
