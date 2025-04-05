type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounterII(init: number): Counter {
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


console.log(createCounterII(1).increment());  // Call increment
console.log(createCounterII(1).reset());     // Call reset
console.log(createCounterII(1).decrement()); // Call decrement
