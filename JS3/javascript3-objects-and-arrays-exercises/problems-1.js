/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

const emptyArray = [];

function isSortedAndHow(emptyArray) {
    if (emptyArray[0] <= emptyArray[1]) {
    return "yes, ascending"
} else if ((emptyArray[0] >= emptyArray[2])) {
    return "yes, descending"
} if (!(emptyArray[0] <= emptyArray[2])) {
    return "yes, descending"
} else {
    return "no"
}
}
isSortedAndHow([1,2])
isSortedAndHow([1,-1])

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow