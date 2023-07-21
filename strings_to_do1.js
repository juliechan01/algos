// REMOVE BLANKS
function removeBlanks(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
        result += inputString[i];
        }
    }
    
    return result;
}

const input = "      Hello, hello, hellooooooo woooooooorld!    "
const output = removeBlanks(input);
console.log(output);

// GET DIGITS
function getDigits(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (!isNaN(Number(char))) {
            result += char;
        }
    }

    const integerResult = parseInt(result, 10);
    return integerResult;

}

const input1 = "abc123def4";
const output1 = getDigits(input1);
console.log(output1);

// ACRONYMS
function generateAcronym(inputString) {
    const words = inputString.split(' ');
    let acronym = '';

    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0).toUpperCase();
        acronym += firstLetter;
    }

    return acronym;
}

const input2 = "what the facebook"; // plz don't hunt me down lol
const acronym = generateAcronym(input2);
console.log(acronym);

// COUNT NON-SPACES
function countNonSpaces(inputString) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            count++;
        }
    }

    return count;
}

const input3 = "Hola soy Dora! And I'm Boots!";
const result = countNonSpaces(input3);
console.log(result);

// REMOVE SHORTER STRINGS
function removeShorterStrings(stringsArray, minLength) {
    const filteredArray = [];

    for (let i = 0; i < stringsArray.length; i++) {
        const currentString = stringsArray[i];
        let length = 0;

        for (let j = 0; j < currentString.length; j++) {
            length++;
        }

        if (length >= minLength) {
            filteredArray.push(currentString);
        }
    }

    return filteredArray;
}

const inputArray = ["apple", "banana", "grapes", "kiwi", "orange"];
const minLength = 5;
const result1 = removeShorterStrings(inputArray, minLength);
console.log(result1);