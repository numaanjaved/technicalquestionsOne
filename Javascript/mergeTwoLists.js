// You are given the heads of two sorted linked lists list1 and list2.


// question from leetcode.com

let arr1 = [1, 2, 4], arr2 = [1, 3, 4];


let mergeTwoLists = function (list1, list2) {
    list2.forEach(num => list1.push(num));
    let sorted = list1.sort((a, b) => { return a - b; });
    return sorted;
};

console.log(mergeTwoLists(arr1, arr2));
