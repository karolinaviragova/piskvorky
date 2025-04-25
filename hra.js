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
