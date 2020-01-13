users = JSON.parse(localStorage.getItem('users'));
let sumAges = 0,
    maxLanguages = 0,
    menQuantity = 0,
    womenQuantity = 0;
users.forEach(user => {
    sumAges += user.age;
    user.langCount > maxLanguages ? maxLanguages = user.langCount : '';
    user.sex === 'М' ? menQuantity++ : womenQuantity++;
});

function countAverageLength()
{
    let exceptionalSymbols = [',', '.', '!', '?'];
    let str = document.querySelector('#string-data').value;
    let wordsCount = 0;
    if (!str) {
        document.querySelector('.result-container p').textContent = "I can't count an average length of empty words, sorry!";
        return;
    }

    let strPieces = str.split(' ');
    strPieces.forEach(strPiece => {
        exceptionalSymbols.forEach(exceptionalSymbol => {
            while (strPiece.includes(exceptionalSymbol)) {
                strPiece = strPiece.split(exceptionalSymbol).join('');
            }
        });
        wordsCount++;
    });

    let wordsLength = strPieces.join('').length;
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