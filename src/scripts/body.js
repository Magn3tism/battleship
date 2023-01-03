export default function Body() {
  const mainBody = document.createElement("main");

  mainBody.appendChild(gameBoard("Your Board", "p1"));
  mainBody.appendChild(gameBoard("Enemy's Board", "p2"));

  return mainBody;
}

function gameBoard(text, player) {
  const boardContainer = document.createElement("div");

  const title = document.createElement("span");
  title.textContent = text;

  const board = document.createElement("div");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let box = document.createElement("button");
      // let box = document.createElement("div");
      box.classList.add("box");
      // if (player === "p2") box.classList.add("p2");

      board.appendChild(box);

      if (i % 9 === 0 && i !== 0) box.classList.add("box-bottom");
      if (j % 9 === 0 && j !== 0) box.classList.add("box-right");
    }
  }
  board.classList.add("board");
  board.id = player;

  // if (player === "p2") {
  //   const start = document.createElement("button");
  //   start.textContent = "Start";
  //   start.classList.add("start");
  //   board.appendChild(start);
  // }

  boardContainer.appendChild(title);
  boardContainer.appendChild(board);
  boardContainer.classList.add("board-container");

  return boardContainer;
}
