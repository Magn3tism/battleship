export default class Ship {
  #length;
  #hits;

  constructor(length = 1) {
    this.#length = length;
    this.#hits = [];

    for (let i = 0; i < this.#length; i++) {
      this.#hits[i] = i + 1;
    }
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  hit(index) {
    for (let i = 0; i < this.#hits.length; i++) {
      if (index === i) {
        this.#hits[i] *= -1;
        break;
      }
    }

    return this.#hits;
  }

  get isSunk() {
    let sunk = 0;
    this.#hits.forEach((element) => {
      sunk = sunk + (element > 0);
    });

    return !sunk;
  }
}
