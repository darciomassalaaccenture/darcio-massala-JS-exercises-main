/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

let nums = Array.from({length: 4}, () => Math.floor(Math.random()*100));

const compareNumsA = (a,b) => a - b
const compareNumsB = (a,b) => b - a
// sum = nums[0] + nums[1]

function sumTwoSmallestNumbers(nums) {
    compareNumsA
    sum = nums[0] + nums[1]
}

// sumTwoSmallestNumbers

// Do not modify this code
// window.solutions = window.solutions || {}
// window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers