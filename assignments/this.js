/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: Global scope, shows the window/console object. 
     Shows entire JS language in Inspector. Don't use this!

* 2. Implicit Binding: Most common. Automatically happens. Refers to
     object to left of the dot.

* 3. Explicit Binding: Overrides another binding. Explicitly points
     to another object. Uses .call, .apply & .bind.

* 4. New Binding: Uses "new" keyword. Constructs a new object and
     points THIS to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding() {          // function is on global scope, so window is
    console.log(this);              // global. Inspect/console shows entire JS
  }                                 // language. Strict mode would show error.
  
  windowBinding();                  // invoking global function

//-----------------------------------------------

// Principle 2

// code example for Implicit Binding

var me = {                          // object
    name: "Vish",                   // attribute
    sayName: function(){            // function inside of object
        console.log(this.name);     // this = "me", so name = name inside of "me" = Vish
    }                               // w/o "this" console line is blank - no context
}

me.sayName();                       // invoking function inside of "me" object

//-----------------------------------------------

// Principle 3

// code example for New Binding



//-----------------------------------------------

// Principle 4

// code example for Explicit Binding

var sayBind = function() {          // global function
    console.log(this.name);
}

var bindType = {                    // object
    name: "Explicit Binding",       // attribute
};

sayBind.call(bindType);             // invoke global function with explicit binding to
                                    // bindType