//Question 1: Always Hungry
let yummy = ""
function alwaysHungry(arr) {
    let hungryMessage = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
           yummy = "yummy"
           console.log(yummy)
        }
        if (arr[i] !== "food") {
            hungryMessage = "I'm Hungry" 
        }
    }  
    return hungryMessage
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
let hungry = alwaysHungry([4, 1, 5, 7, 2]);
console.log(hungry)
// this should console log "I'm hungry"


//Question 2: High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Question 3: Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = Math.round(sum + arr[i]/arr.length);
    }
    var count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > sum) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Question 4: Array Reverse

function reverse(arr) {
    arr.reverse();
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Question 5: Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 0; i < n; i ++) {
      fibArr.push(fibArr[fibArr.length -1] + fibArr[fibArr.length -2]) 
      if (fibArr[fibArr.length -1] === 55 ) {
        fibArr.pop(fibArr.length-1)
      }
    }
    return fibArr;
} 
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
