type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count = init;
    return {
        increment() {
            return count = count + 1
        },
        decrement() {
           return count = count - 1
        },
        reset() {
            return count = init
        },
    }
};


console.log(createCounter(1).increment());  // Call increment
console.log(createCounter(1).reset());     // Call reset
console.log(createCounter(1).decrement()); // Call decrement
