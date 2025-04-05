function createCounter(n: number) {
    return function () {
        return n++;
    };
}