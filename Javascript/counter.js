// Q. from leetcode.com
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let createCounter = (num) => {

    let counter = num;
    return function () {
        return counter++;
    }
}

let counter1 = createCounter(10);
let counter2 = createCounter(20);
let counter3 = createCounter(30);