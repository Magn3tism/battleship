import Ship from "./../scripts/ship";

it("Checks length", () => {
  expect(new Ship(5).length).toBe(5);
  expect(new Ship(7).length).toBe(7);
  expect(new Ship(3).length).toBe(3);
  expect(new Ship(9).length).toBe(9);
});

it("Checks hits before hit", () => {
  expect(new Ship(5).hits).toBe(0);
});

it("Check hit", () => {
  let ship = new Ship(5);

  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
});

it("Check sunk", () => {
  expect(new Ship(4).isSunk(0)).toBeFalsy();
  expect(new Ship(5).isSunk(5)).toBeTruthy();
});
