# object-clone
object-clone is a npm package for cloning js objects

### Introduction
Normally when you assign an object to a new variable in javascript, both the original variable and the new variable point to the same object in memory. So for example:
```
var x = { y: { z: 0 } };
var test = x;
test.y.z = 2;
// Now x.y.z is also equal to 2 because they're both references to the same underlying object
```

This package adds an Object.clone method which returns a totally new object, not a reference to the original.


###Usage
Clone this repository in your project's node_modules folder (should I add it to npm eventually?)
Then you can use it like this:
```
require('object-clone');

var x = { y: { z: 0 } };
var test = Object.clone( y );
test.y.z = 2;
// Now test.y.z is 2, and x.y.z is still 0 because they're different objects
```

