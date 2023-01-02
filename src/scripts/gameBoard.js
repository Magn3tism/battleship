import Ship from "./ship";

export default class GameBoard {
  #board;
  #ships;
  #allShips;

  constructor() {
    this.#board = [[], [], [], [], [], [], [], [], [], []];
    this.#ships = 0;
    this.#allShips = [];

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
    if (y + size > 10) return "Cannot place";

    const ship = new Ship(size);
    let length = ship.length;
    this.#ships++;

    let pos = 1;
    for (let i = 0; i < length; i++) {
      this.#board[x][y + i] = {
        ship: this.#ships,
        position: pos,
        value: ship,
        hit: false,
      };
      pos++;
    }

    this.#allShips.push(ship);
  }

  recieveAttack(x, y) {
    if (this.#board[x][y].hit) return false;

    this.#board[x][y].hit = true;

    if (this.#board[x][y].value === 0) return "Miss";

    this.#board[x][y].value.hit(this.#board[x][y].position - 1);

    return "Hit";
  }

  checkAllSunk() {
    let sunk = 0;

    this.#allShips.forEach((ship) => (sunk += !ship.isSunk));

    return !sunk;
  }
}
