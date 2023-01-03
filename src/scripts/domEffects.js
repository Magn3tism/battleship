function onPlace(player) {
  const domBoard = document.getElementById(player.name);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.board.board[i][j].ship) {
        {
          if (player.board.board[i][j].position === 1)
            domBoard.children[i * 10 + j].classList.add("placed-left");

          if (
            player.board.board[i][j].value.length ===
            player.board.board[i][j].position
          )
            domBoard.children[i * 10 + j].classList.add("placed-right");

          domBoard.children[i * 10 + j].classList.add("placed");
        }
      }
    }
  }
}

function onHit(node) {
  node.textContent = "×";
  node.classList.add("attacked");
  node.classList.add("hit-ship");
}

function onMiss(node) {
  node.textContent = "•";
  node.classList.add("attacked");
}

function sinkShip() {}

export { onPlace, onHit, onMiss, sinkShip };
