function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }
    return result
};

function plusone(n: number) { return n + 1; }

console.log(map([1, 2, 3], plusone));
