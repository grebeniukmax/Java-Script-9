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



// N6 Напиши скрипт з наступним функціоналом:
document.addEventListener('DOMContentLoaded',loading)
function loading (event) {
    const numbers = []
    console.log(numbers)
    let promptMessage = ""
    let summa = 0
    while (promptMessage != null) {
        promptMessage = prompt("Введи число")
        console.log(promptMessage)
        if (promptMessage === null) {
            break }
       // if (!Number.isNan(promptMessage)) {
      //      numbers.push(parseFloat(promptMessage))
      //  }
      numbers.push(parseFloat(promptMessage))
      if (numbers.length > 0) {
        console.log(numbers)
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            summa += element
        }
        
      }
    }
    console.log(`Загальна сума чисел дорівнює ${summa}`)
}





//При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
//Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
//Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів
//масиву і записати її в змінну total.
//Використовуй цикл for або for...of.
//Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
//🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення,
//показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно,
//після чого знову користувачеві пропонується ввести число в prompt.
