import Player from "./player";
import { onPlace } from "./domEffects";

export default function gameLoop() {
  const p1 = new Player("p1", "h");
  const p2 = new Player("p2", "b");

  p1.board.place(3, 4, 5);
  onPlace(p1);

  p2.board.place(4, 3, 7);
}
