const board = document.getElementById("board");
let gameArray = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const history = [];

const playerPick = localStorage.getItem("pick");
const computerPick = playerPick === "X" ? "O" : "X";

const buttonYou = document.getElementById("you");
const buttonCpu = document.getElementById("cpu");

buttonYou.textContent = `${playerPick}(YOU)`;
buttonCpu.textContent = `${computerPick}(CPU)`;

const scoreYou = document.getElementById("you_score");
const scoreTies = document.getElementById("ties_score");
const scoreCpu = document.getElementById("cpu_score");

gameArray.forEach((item, index) => {
  const eleman = document.createElement("button");
  eleman.addEventListener("click", (event) => {
    console.log("tiklandi", event);
    if (event.target.textContent === "") {
      gameArray[index] = playerPick;
      // check with - kazanan var mi kontrol et
      event.target.textContent = playerPick;
      const isEndGame = checkWin(playerPick);
      if (!isEndGame) {
        computerMove(computerPick);
        checkWin(computerPick);
      }
    }
  });
  eleman.classList.add("game_container_board_item");
  board.appendChild(eleman);
});

function computerMove(computerPick) {
  let randomSayi = Math.floor(Math.random() * 9);
  let isEmpty = false;
  gameArray.forEach((item) => {
    if (item === "") {
      isEmpty = true;
    }
  });

  if (isEmpty === false) {
    return false;
  } else {
    while (gameArray[randomSayi] !== "") {
      randomSayi = Math.floor(Math.random() * 9);
    }

    gameArray[randomSayi] = computerPick;
    const button = document.querySelector(
      `#board button:nth-child(${randomSayi + 1})`
    );
    button.textContent = computerPick;

    console.log(gameArray);
  }
}

function checkWin(pick) {
  for (let condition of winning) {
    const [a, b, c] = condition;
    if (
      gameArray[a] !== "" &&
      gameArray[a] === gameArray[b] &&
      gameArray[a] === gameArray[c] &&
      gameArray[a] === pick
    ) {
      console.log("game array from checkwin ", gameArray);
      history.push(pick);
      console.log("history:", history);
      alert(`Kazanan ${pick}`);
      resetGame();
      return true;
    }
  }

  const isTie = gameArray.filter((item) => item === "");
  if (isTie.length === 0) {
    history.push("T");
    alert("Berabere");
    resetGame();
    return true;
  }
  return false;
}

function resetGame() {
  gameArray = ["", "", "", "", "", "", "", "", ""];

  const x = history.filter((item) => item === "X");
  const tie = history.filter((item) => item === "T");
  const cpu = history.filter((item) => item === "O");

  scoreYou.textContent = x.length;
  scoreTies.textContent = tie.length;
  scoreCpu.textContent = cpu.length;

  const buttons = document.querySelectorAll(".game_container_board_item");
  buttons.forEach((button) => {
    button.textContent = "";
  });
}
