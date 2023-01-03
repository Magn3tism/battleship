import Player from "./player";
import { onPlace, onHit, onMiss, sinkShip } from "./domEffects";

export default function gameLoop() {
  const p1 = new Player("p1", "h");
  const p2 = new Player("p2", "b");
  let turn = 1;

  p1.board.place(2, 3, 5);
  p1.board.place(6, 1, 1);
  p1.board.place(7, 6, 2);
  p1.board.place(9, 7, 3);
  onPlace(p1);

  p2.board.place(3, 2, 3);
  p2.board.place(5, 4, 3);

  const p1Board = document.getElementById("p1");
  const p2Board = document.getElementById("p2");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      p2Board.children[i * 10 + j].addEventListener("click", () => {
        if (!p2Board.children[i * 10 + j].textContent) {
          if (p2.board.board[i][j].ship) {
            onHit(p2Board.children[i * 10 + j]);
            p2.board.recieveAttack(i, j);

            for (let i = 0; i < 10; i++) {
              for (let j = 0; j < 10; j++) {
                let ship = p2.board.board[i][j].value;
                if (ship && ship.isSunk)
                  p2Board.children[i * 10 + j].classList.add("sunk");
                if (p2.board.checkAllSunk()) {
                  console.log("h");
                  let buttons = document.getElementsByTagName("button");
                  Array.from(buttons).forEach(
                    (btn) => (btn.disabled = "disabled")
                  );
                }
              }
            }
          } else {
            onMiss(p2Board.children[i * 10 + j]);
          }
          let r1 = Math.floor(Math.random() * 10);
          let r2 = Math.floor(Math.random() * 10);

          while (1) {
            if (!p1Board.children[r1 * 10 + r2].textContent) {
              break;
            }
            console.log(3);
            r1 = Math.floor(Math.random() * 10);
            r2 = Math.floor(Math.random() * 10);
          }

          computerAttack(p1Board, p1, r1, r2);
        }
      });
    }
  }
}

function computerAttack(board, player, r1, r2) {
  if (player.board.board[r1][r2].ship) {
    onHit(board.children[r1 * 10 + r2]);
    player.board.recieveAttack(r1, r2);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let ship = player.board.board[i][j].value;
        if (ship && ship.isSunk)
          board.children[i * 10 + j].classList.add("sunk");
      }
    }
    if (player.board.checkAllSunk()) return true;
  } else {
    onMiss(board.children[r1 * 10 + r2]);
  }

  return false;
}
