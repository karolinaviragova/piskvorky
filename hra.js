import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = 'circle';
const circleIcon = document.querySelector(".circle__icon");

const gameField = (event) => {
  event.target.disabled = true

  if (currentPlayer === "circle") {
     event.target.classList.add("board__field--circle")
     circleIcon.innerHTML = `<img src="icons/cross.svg" alt="white cross" class="cross">`
     currentPlayer = "cross"
   } else if (currentPlayer === "cross") {
     event.target.classList.add("board__field--cross")
     circleIcon.innerHTML = `<img src="icons/circle.svg" alt="white circle" class="circle">`
     currentPlayer = "circle"
   }

   const fields = document.querySelectorAll(".game__btn");
   const gameArray = Array.from(fields).map((field) => {
    if (field.classList.contains("board__field--circle")) {
      return "o"
    }
    if (field.classList.contains("board__field--cross")) {
      return "x"
    }
    return "_"
})

  const winner = findWinner(gameArray);

  if (winner === "o") {
    setTimeout(() => {
    window.alert("Winner is O")
    location.reload()
    }, "0500")
  } else if (winner === "x") {
    setTimeout(() => {
    window.alert("Winner is X")
    location.reload()
    }, "0500")
  } else if (winner === "tie") {
    setTimeout(() => {
    window.alert("This is a tie!")
    location.reload()
    }, "0500")
  }
}

const allButtons = document.querySelectorAll(".game__field");
allButtons.forEach((button) => {
  button.addEventListener("click", gameField)
})

const iconrestart = document.querySelector(".game__icon--restart");

iconrestart.addEventListener("click", (event) => {
  const reset = confirm("Opravdu chcete hru restartovat?");
  if (reset === false) {
    event.preventDefault()
  }
})




