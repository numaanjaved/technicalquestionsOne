// i.	Write a program which should count Vowels in the strings and return vowels in reverse order if vowels are more than 3. 


let countVowels = (inputString) => {
    let originalString = inputString;
    let string = inputString.toLowerCase();
    let vowel = 0;
    for (let i = 0; i < string.length; i++) {

        if ("aeiou".includes(string.charAt(i))) {

            vowel++
        }
        // if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u")
        // {
        // }
    }
    if (vowel > 3) {
        let Arr = [];
        for (let i = 0; i < originalString.length; i++) {
            Arr.push(originalString[i]);
        }
        let reverseArray = Arr.reverse();
        let ReverseString = "";
        for (let i = 0; i < reverseArray.length; i++) {
            ReverseString = ReverseString.concat(reverseArray[i]);
        }
        return ReverseString
    }
    return vowel;
}

console.log(countVowels("Mr John Smith Andrew"));