// ii.Write a function which should add the two vowels in the arrays and generate third array and store vowels only once if repeated.



let vowelsArr1 = ['s', 'h', 'a', 'h', 'a', 'b', 'u', 's', 'm', 'a', 'n', 'i'];
let vowelsArr2 = ['j', 'h', 'a', 'n', 'g', 'e', 'e', 'r', 'k', 'h', 'a', 'n'];


let storeVowels = (arr1, arr2) => {
    let commaRemovedArr1 = arr1.join("");
    let arrToStrArr1 = commaRemovedArr1.toString()
    let a = [];
    for (let i = 0; i < arrToStrArr1.length; i++) {
        if ("aeiou".includes(arrToStrArr1.charAt(i))) {
            a.push(arrToStrArr1[i]);
        }
    }
    let vowelsArr1 = a.join("");
    let removedCommaVowels1 = vowelsArr1.toString();
    let vowels1 = "";
    console.log(removedCommaVowels1);
    for (let i = 0; i < a.length; i++) {
        vowels1 += removedCommaVowels1.charAt(i);
    }
    let commaRemovedArr2 = arr2.join("");
    let arrToStrArr2 = commaRemovedArr2.toString()
    let b = [];
    for (let i = 0; i < arrToStrArr2.length; i++) {
        if ("aeiou".includes(arrToStrArr2.charAt(i))) {
            b.push(arrToStrArr2[i]);
        }
    }
    let vowelsArr2 = b.join("");
    let removedCommaVowelsArr2 = vowelsArr2.toString();
    let vowels2 = "";
    console.log(removedCommaVowelsArr2);
    for (let i = 0; i < a.length; i++) {
        vowels2 += removedCommaVowelsArr2.charAt(i);
    }
    let CombineVowels = vowels1 + vowels2;
    let newArr = [];
    for (let i = 0; i < CombineVowels.length; i++) {
        newArr.push(CombineVowels[i]);
    }
    let finalArr = []
    for (let i = 0; i < newArr.length; i++) {
        if (CombineVowels.charAt(i) === newArr[i]) {
            if (!finalArr.includes(newArr[i])) {
                finalArr.push(newArr[i])
            }
        }
    }
    return finalArr;
}
console.log(storeVowels(vowelsArr1, vowelsArr2));
