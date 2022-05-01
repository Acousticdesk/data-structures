"use strict";
const selectionSort = (array) => {
    let startSearchingFrom = 0;
    let theLeastValueIndex = 0;
    for (let i = startSearchingFrom; i < array.length - 1; i += 1) {
        for (let j = startSearchingFrom; j < array.length; j += 1) {
            if (array[j] < array[theLeastValueIndex]) {
                theLeastValueIndex = j;
            }
        }
        const temp = array[startSearchingFrom];
        array[startSearchingFrom] = array[theLeastValueIndex];
        array[theLeastValueIndex] = temp;
        startSearchingFrom += 1;
    }
    return array;
};
const binarySearch = (orderedArray, value, l, r) => {
    const mid = (l + r) / 2;
    if (orderedArray[mid] === value) {
        return min;
    }
    if (orderedArray[initialIndex] < value) {
        return binarySearch(orderedArray, value);
    }
    if (orderedArray[initialIndex] > value) {
        return binarySearch(orderedArray, value);
    }
};
console.log(selectionSort([5, 7, 2, 9, 1, 199]));
