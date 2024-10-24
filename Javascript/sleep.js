// Question from leetcode.com
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
let sleep = async (milliSec) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise resolved`)
        }, milliSec);
    });

}
sleep(100).then((val) => { console.log(val) }).catch((err) => { console.error(err) });