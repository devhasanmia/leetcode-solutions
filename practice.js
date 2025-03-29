/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World"  
    };
};


console.log(createHelloWorld("sdfs"))
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */