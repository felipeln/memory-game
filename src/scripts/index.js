const resetBtn = document.querySelector('.reset')
const emojis = [
  "🍕",
  "🍕",
  "🍔",
  "🍔",
  "🌭",
  "🌭",
  "🧀",
  "🧀",
  "🥩",
  "🥩",
  "🍪",
  "🍪",
  "🍩",
  "🍩",
  "🎂",
  "🎂"
]
let openCards = []

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1)

for (let i = 0; i < emojis.length; i++) {
  let square = document.createElement('li')
  square.dataset.n = i
  square.className = "square"
  square.innerHTML = shuffleEmojis[i]
  document.querySelector('.game-board').appendChild(square)
  square.onclick = handleClick
}

function handleClick(){
  if(openCards.length < 2 && openCards.every(item => item.dataset.n != this.dataset.n)){
    this.classList.add('selectedSquare')
    openCards.push(this)
  }
  if(openCards.length === 2){
    setTimeout(checkMatch, 500)
  }
}
function checkMatch(){
  if(openCards[0].innerHTML === openCards[1].innerHTML){
    console.log(openCards)
    openCards[0].classList.add('squareMatch')    
    openCards[1].classList.add('squareMatch')    
  }
  if(openCards[0].innerHTML !== openCards[1].innerHTML){
    openCards[0].classList.remove('selectedSquare')    
    openCards[1].classList.remove('selectedSquare')    
  }
  openCards = []

  if(document.querySelectorAll(".squareMatch").length === emojis.length){
    alert('Voce Venceu')
  }
}

resetBtn.addEventListener('click', () => {
  window.location.reload()
})

