
let numberOfCards = prompt("Com quantas cartas você quer jogar?");
while (numberOfCards%2 !== 0 || numberOfCards < 4 || numberOfCards > 14) { 
  numberOfCards = prompt("Insira um número par entre 4 e 14!");
  }

  let cards = ["midia/sylveon.png",
  "midia/sylveon.png",
  "midia/umbreon.png",
  "midia/umbreon.png",
  "midia/glaceon.png",
  "midia/glaceon.png",
  "midia/jolteon.png",
  "midia/jolteon.png",
  "midia/vaporeon.png",
  "midia/vaporeon.png",
  "midia/espeon.png",
  "midia/espeon.png",
  "midia/leafeon.png",
  "midia/leafeon.png"];
  
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

let plays = 0;
let matches = 0;

function turnSelectedCard(element) {
  let selectedCardBack = document.querySelector(".selectedBackFace");
  let selectedCardFront = document.querySelector(".selectedFrontFace");
  element.querySelector(".face").classList.add("selectedFrontFace");
  element.querySelector(".back-face").classList.add("selectedBackFace");

  if(selectedCardBack !== null) {
    if (element.querySelector(".back-face").innerHTML === selectedCardBack.innerHTML) {
      element.querySelector(".face").classList.add("matchFrontFace");
      element.querySelector(".back-face").classList.add("matchBackFace");
      selectedCardFront.classList.add("matchFrontFace");
      selectedCardBack.classList.add("matchBackFace");
      matches++;
    }
      setTimeout( function() {
      element.querySelector(".face").classList.remove("selectedFrontFace");
      element.querySelector(".back-face").classList.remove("selectedBackFace");
      document.querySelector(".selectedBackFace").classList.remove("selectedBackFace");
      document.querySelector(".selectedFrontFace").classList.remove("selectedFrontFace");
    }, 1000);

  }
  plays++;

  if(matches === numberOfCards/2) {
    setTimeout( function() {
      let win = true;
      alert(`Yay! Você ganhou em ${plays} jogadas e levou ${counter} segundos!`);
    }, 50);
      setTimeout(function () {
      playAgain();
  }, 2000)
  }
}

function playAgain() {
  let win = false;
  let anotherRoundInvite = prompt("Que tal mais uma partida? (digite 'sim' ou 'não')");

  if (anotherRoundInvite === "sim") {
          {window.location.reload();}
      } else if (anotherRoundInvite === "não") {
      clearInterval(idInterval);
      alert("Byyeeee!")
  }
}

counter = 0;
let idInterval;

function timer() {
  idInterval = setInterval(increaseTimer, 1000);
}

function increaseTimer() {
      counter++;
      document.querySelector(".timer").innerHTML = counter + "s";
}

timer();
