"use strict";
const array = [1, 2, 3, 4, 5];
const createRandomIndexForArray = (arr) => {
    return Math.round(Math.random() * (arr.length - 1));
};
const randomize = (arr) => {
    // 1. check length
    // 2. pick a random integer
    // 3. try to insert it into the array
    const arrShuffled = [];
    arr.forEach((item) => {
        let nextIndexCandidate = createRandomIndexForArray(arr);
        let isItemFoundItsPlace = false;
        while (!isItemFoundItsPlace) {
            if (!arrShuffled[nextIndexCandidate]) {
                arrShuffled[nextIndexCandidate] = item;
                isItemFoundItsPlace = true;
            }
            nextIndexCandidate = createRandomIndexForArray(arr);
        }
    });
    return arrShuffled;
};
console.log(randomize(array));
