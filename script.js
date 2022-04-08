
let numberOfCards = prompt("Com quantas cartas você quer jogar?");
while (numberOfCards%2 !== 0 || numberOfCards < 4 || numberOfCards > 14) { 
  numberOfCards = prompt("Insira um número par entre 4 e 14!");
  }

  let cards = ["midia/bobrossparrot.gif",
  "midia/bobrossparrot.gif",
  "midia/explodyparrot.gif",
  "midia/explodyparrot.gif",
  "midia/fiestaparrot.gif",
  "midia/fiestaparrot.gif",
  "midia/metalparrot.gif",
  "midia/metalparrot.gif",
  "midia/revertitparrot.gif",
  "midia/revertitparrot.gif",
  "midia/tripletsparrot.gif",
  "midia/tripletsparrot.gif",
  "midia/unicornparrot.gif",
  "midia/unicornparrot.gif"];
  
    let chosenCards = cards.slice(0, numberOfCards);
    chosenCards.sort(comparador);

  function comparador() { 
	return Math.random() - 0.5; 
}

function addCards () {
  let ul = document.querySelector("ul");
  for (let i = 0; i < chosenCards.length; i++){
    ul.innerHTML += `
    <ul class="card" onClick="turnSelectedCard(this)">
    <li class="face"></li>
    <li class="back-face back img"><img src="${chosenCards[i]}"></li>
    </ul>`
  }
}

addCards();

function turnSelectedCard(element) {
  let selectedCardBack = document.querySelector(".selectedBackFace");
  let selectedCardFront = document.querySelector(".selectedFrontFace");
  element.querySelector(".face").classList.add("selectedFrontFace");
  element.querySelector(".back-face").classList.add("selectedBackFace");

  if(selectedCardBack !== null){
    if (element.querySelector(".back-face").innerHTML === selectedCardBack.innerHTML){
        element.querySelector(".face").classList.add("matchFrontFace");
        element.querySelector(".back-face").classList.add("matchBackFace");
        selectedCardFront.classList.add("matchFrontFace");
        selectedCardBack.classList.add("matchBackFace");
  }
  setTimeout( function() {
    element.querySelector(".face").classList.remove("selectedFrontFace");
    element.querySelector(".back-face").classList.remove("selectedBackFace");
    document.querySelector(".selectedBackFace").classList.remove("selectedBackFace");
    document.querySelector(".selectedFrontFace").classList.remove("selectedFrontFace");
  }, 1000);

  }
}