// iii.	Write a program to return the third and last largest number in the array if first largest number is greater than second largest by 20%. 

let arrValues = (arrayOfNum) => {
    let firstLargest = arrayOfNum[0], secondLargest = arrayOfNum[0], thirdLargest = arrayOfNum[0], lastLargest = arrayOfNum[0];
    for (let i = 0; i < arrayOfNum.length; i++) {
        if (arrayOfNum[i] > firstLargest) { firstLargest = arrayOfNum[i]; }
    }
    let dummyArr = [];
    for (let i = 0; i < arrayOfNum.length; i++) {
        if (arrayOfNum[i] < firstLargest) { dummyArr.push(arrayOfNum[i]); }
    }
    for (let i = 0; i < dummyArr.length; i++) {
        if (dummyArr[i] > secondLargest) { secondLargest = dummyArr[i]; }
    }

    let dummyArr2 = [];
    if (firstLargest > (secondLargest * 1.2)) {
        dummyArr.map((num) => {
            if (num < secondLargest) { dummyArr2.push(num); }
        })
        dummyArr2.map((num) => {
            if (num > thirdLargest) { thirdLargest = num; }
        });
        arrayOfNum.forEach((num) => {
            if (num < lastLargest) { lastLargest = num; }
        });
    }
    console.log(`The Largest Number in the Array is ${firstLargest}`);
    console.log(`The Second Largest Number in the Array is ${secondLargest}`);
    console.log(`The Third Largest Number in the Array is ${thirdLargest}`);
    console.log(`The Last Largest Number(smallest) in the Array is ${lastLargest}`);
    return [thirdLargest, lastLargest];
}
let arrayOfNum = [3, 5, 9, 10, 2, 15, 50, 20, 30];
console.log(arrValues(arrayOfNum));
