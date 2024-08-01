const board = document.getElementById("board");
const gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
gameArray.forEach((item, index) => {
  const eleman = document.createElement("button");
  const p = document.createElement("p");
  p.textContent = "a";
  eleman.appendChild(p);
  eleman.classList.add("game_container_board_item");
  board.appendChild(eleman);
});
