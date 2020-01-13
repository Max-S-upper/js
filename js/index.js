users = JSON.parse(localStorage.getItem('users'));
let sumAges = 0,
    maxLanguages = 0,
    menQuantity = 0,
    womenQuantity = 0;
users.forEach(user => {
    sumAges += user.age;
    user.langCount > maxLanguages ? maxLanguages = user.langCount : '';
    user.sex === 'M' ? menQuantity++ : womenQuantity++;
});

function countAverageLength()
{
    let exceptionalSymbols = [', ', '. ', '! ' , '? ' , ' ', ',', '.', '!', '?'],
        str = document.querySelector('#string-data').value,
        generalLength = str.split('').length,
        wordsLength = 0,
        wordsCount = 0;
    if (!str) {
        document.querySelector('.result-container p').textContent = "I can't count an average length of empty words, sorry!";
        return;
    }

    exceptionalSymbols.forEach(exceptionalSymbol => {
        if (str.includes(exceptionalSymbol)) {
            let processedStr = '',
                strPieceCurrent = str.split(exceptionalSymbol);
            for (let i = 0; i < strPieceCurrent.length - 1; i++) {
                wordsLength += strPieceCurrent[i].split('').length;
                wordsCount++;
            }

            str = '';
            if (strPieceCurrent.length < 1) str = strPieceCurrent[0];
            else str = strPieceCurrent[strPieceCurrent.length - 1];
        }
    });

    console.log(generalLength);
    console.log(wordsLength);

    document.querySelector('.result-container p').textContent = 'Average length of a word in the string above is ' + Math.round(wordsLength/wordsCount);
}

let averageAge = Math.round(sumAges/users.length);
document.addEventListener('DOMContentLoaded', function ()
{
    document.querySelector('#average-age span:last-child').textContent = averageAge;
    document.querySelector('#max-languages span:last-child').textContent = maxLanguages;
    document.querySelector('#men-quantity span:last-child').textContent = menQuantity;
    document.querySelector('#women-quantity span:last-child').textContent = womenQuantity;
    document.querySelector('#string-data-submit').addEventListener('click', countAverageLength);
});