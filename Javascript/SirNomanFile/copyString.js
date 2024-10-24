// iv.	Given a string and a non-negative int a, return a larger string that is n copies of the original string.

// string_times('test', 2) → ‘testtest'
// string_times('test', 3) → 'testtesttest'

let copy = (inputString, copies) => {
    let string = "";
    for (let i = 0; i < copies; i++) {
        string = string.concat(inputString);
    }
    return string;
}
console.log(copy("ahmed", 10));