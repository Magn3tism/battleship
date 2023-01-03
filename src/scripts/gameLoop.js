import Player from "./player";
import { onPlace, onHit, onMiss, sinkShip } from "./domEffects";

export default function gameLoop() {
  const p1 = new Player("p1", "h");
  const p2 = new Player("p2", "b");

  p1.board.place(2, 3, 5);
  onPlace(p1);

  p2.board.place(3, 2, 3);
  p2.board.place(5, 4, 3);

  const p1Board = document.getElementById("p1");
  const p2Board = document.getElementById("p2");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // p1Board.children[i * 10 + j].addEventListener("click", () => {
      //   if (p1.board.board[i][j].ship) {
      //     onHit(p1Board.children[i * 10 + j]);
      //   } else {
      //     onMiss(p1Board.children[i * 10 + j]);
      //   }
      // });

      p2Board.children[i * 10 + j].addEventListener("click", () => {
        if (p2.board.board[i][j].ship) {
          onHit(p2Board.children[i * 10 + j]);
          p2.board.recieveAttack(i, j);

          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              let ship = p2.board.board[i][j].value;
              if (ship) {
                if (ship.isSunk) {
                  p2Board.children[i * 10 + j].classList.add("sunk");
                }
              }
            }
          }
        } else {
          onMiss(p2Board.children[i * 10 + j]);
        }
      });
    }
  }
}
