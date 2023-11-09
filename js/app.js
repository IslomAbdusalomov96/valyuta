let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form__select");
let elResult = document.querySelector(".form__result");

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputValue = elFormInput.value;
    let selectValue = elFormSelect.value;
    let usd =  12297;
    let euro = 13115;
    let yuan = 1689;
    let rubl = 133;
    let dinor = 39796;
    let funt = 15063;
    let johnWickGold = 10000;
    if (selectValue === 'usd') {
        elResult.textContent = inputValue * usd
    } else if (selectValue === "euro") {
        elResult.textContent = inputValue * euro
    } else if (selectValue === 'yuan') {
        elResult.textContent = inputValue * yuan
    } else if (selectValue === 'rubl') {
        elResult.textContent = inputValue * rubl
    } else if (selectValue === 'dinar') {
        elResult.textContent = inputValue * dinor
    } else if (selectValue === 'funt') {
        elResult.textContent = inputValue * funt
    } else if (selectValue === 'john_wick_gold') {
        elResult.textContent = inputValue * johnWickGold
    } else {
        elResult.textContent = 'Bunday valyuta turi yo\'q'
    }
})