
/**
 * Clones an object as a completely separate instance
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
if ( !Object.clone ) {
  Object.defineProperty( Object, "clone", {
    enumerable: false,
    configurable: true,
    writable: true,
    value:  function( obj ) {

      // We return the input value if obj is actually a primitive
      if ( typeof obj !== "object" ) {
        return obj;
      }

      var newObj = {};
      for ( key in obj ) {
        newObj[ key ] = Object.clone( obj[ key ] );
      }

      return newObj;
      
    }

  });
}
