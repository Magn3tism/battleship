class Ship {
  #length;
  #hit;

  constructor(length) {
    this.#length = length;
    this.#hit = 0;
  }

  get length() {
    return this.#length;
  }

  hit() {
    this.#hit++;
  }

  get hits() {
    return this.#hit;
  }

  isSunk(hits) {
    if (hits === this.#length) return true;
    return false;
  }
}

export default Ship;
