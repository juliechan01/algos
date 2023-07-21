// PUSH FRONT
function insertAtBeginning(array, value) {
    return [value, ...array];
}

const origArray = [111, 99, 88, 0];
const newVal = 33;
const newArray = insertAtBeginning(origArray, newVal);
console.log(newArray);

// POP FRONT
function removeBeginningAndReturnFirstVal(array) {
    if(array.length === 0) {
        return undefined;
    }
    const firstVal = array[0];
    const newArray = array.slice(1);
    console.log(firstVal);
    return newArray;
}

const array = [999, 888, 77, 3];
const array1 = removeBeginningAndReturnFirstVal(array);
console.log(array1);

// INSERT AT
function insertAt(array, index, value) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            newArray.push(value);
        }
        newArray.push(array[i]);
    }
    return newArray;
}

const originalArray = [1, 2, 3, 4, 5];
const newIndex = 2;
const additionalValue = 10;

const newNewArray = insertAt(originalArray, newIndex, additionalValue);
console.log(newNewArray);

// REMOVE AT
function removeAt(array, index) {
    if (index < 0 || index >= array.length) {
        return undefined;
    }

    const removedValue = array[index];
    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length--;
    return removedValue;
}

    const orgArray = [1, 2, 3, 4, 5];
    const indexToRemove = 0;
    
    const removedValue = removeAt(orgArray, indexToRemove);
    console.log(removedValue);
    console.log(orgArray);

// SWAP PAIRS
function swapSuccessivePairs(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i += 2) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return array;
}

const array2 = [11, 44, 66, 999, 0];
const swappedArray = swapSuccessivePairs(array2);
console.log(swappedArray);

// REMOVE DUPLICATES
function removeCopies(array) {
    const length = array.length;
    let uniqueIndex = 0;

    for (let i = 1; i < length; i++) {
        if (array[i] !== array[uniqueIndex]) {
            uniqueIndex++;
            array[uniqueIndex] = array[i];
        }
    }

    array.length = uniqueIndex + 1;
    return array;
}

const sortedArray = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeCopies(sortedArray);
console.log(uniqueArray);