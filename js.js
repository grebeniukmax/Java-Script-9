// N1 only sam
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}



// N2 only sam
function calculateCalculatePrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}
console.log(calculateCalculatePrice('Hello peoples!'));
console.log(calculateCalculatePrice('JavaScript is purfecto'));



// N3 only sam
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
console.log(findLongestWord('Bla Blabla Blalala'));
console.log(findLongestWord('Hulou everybody'));



// N4 chut pomog copilot
function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}
console.log(formatString('Chiburek lubit nam namat'));
console.log(formatString('Lublu frontend razrabotku'));
console.log(formatString('Ne govoru po russki potomuchto ya ne cheburek'));
console.log(formatString('svg omg is the best'));



// N5 pochti sam
function checkForSpaming(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}
console.log(checkForSpaming('Ne spam'));
console.log(checkForSpaming('Only new news'));
console.log(checkForSpaming('It is on the good sale'));
console.log(checkForSpaming('spam is a spam'));



// N6 don't understand((