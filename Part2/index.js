const cardId = document.getElementById('idInput');
const cardColor = document.getElementById('colorInput');

console.log(cardId);
console.log(cardColor);

function setCard() {
    const card = document.getElementById(cardId.value);
    card.style.color = cardColor.value;
}

function resetCards() {
    document.getElementById(diamond).style.removeProperty('color');
    document.getElementById(club).style.removeProperty('color');
    document.getElementById(spade).style.removeProperty('color');
    document.getElementById(heart).style.removeProperty('color');
}