import GameBoard from "./gameBoard";

export default class Player {
  #type;

  constructor(name, type) {
    this.name = name;
    this.#type = type;
    this.board = new GameBoard();
  }
}
