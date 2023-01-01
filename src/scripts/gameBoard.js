import Ship from "./ship";

export default class GameBoard {
  #board;
  #ships;

  constructor() {
    this.#board = [[], [], [], [], [], [], [], [], [], []];
    this.#ships = 0;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.#board[i][j] = {
          ship: null,
          position: null,
          value: 0,
          hit: false,
        };
      }
    }
  }

  get board() {
    return this.#board;
  }

  place(x, y, size = 1) {
    if (this.#board[x][y].value !== 0) return "Ship already exists";

    const ship = new Ship(size);
    let length = ship.length;
    this.#ships++;

    let pos = 1;
    for (let i = 0; i < length; i++) {
      this.#board[x][y + i] = {
        ship: this.#ships,
        position: pos,
        ...(i === 0 && { value: ship }),
        ...(i !== 0 && { value: -1 }),
        hit: false,
      };
      pos++;
    }
  }
}
