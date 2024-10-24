// reference leetcode.com
// Q. Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.


let numArray = [1, 2, 3, 4];
let reduce = (initialVal, numArr, reducer) => {
    if (numArr.length === 0) {
        return initialVal
    }
    let val = initialVal
    return reducer(val, numArr);

}
let reducer = (curr, numArr) => {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        curr += numArr[i] * numArr[i];
        sum = curr;
    }
    return sum;
}

reduce(100, numArray, reducer);

// solution accepted by leetcode:=>
// let reduce = (nums, fn, init) => {

//     if (nums.length != 0) {
//         let val = fn(init, nums[0])
//         for (let i = 1; i < nums.length; i++) {
//             val = fn(val, nums[i]);
//         }
//         return val;
//     }


//     return init;
// }
