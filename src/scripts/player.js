import GameBoard from "./gameBoard";

export default class Player {
  #type;
  #board;

  constructor(name, type) {
    this.name = name;
    this.#type = type;
    this.#board = new GameBoard();
  }
}
