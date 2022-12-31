import Ship from "../scripts/ship";

it("Check length", () => {
  expect(new Ship().length).toBe(1);
  expect(new Ship(1).length).toBe(1);
  expect(new Ship(5).length).toBe(5);
  expect(new Ship(7).length).toBe(7);
});

it("Check initial hits", () => {
  expect(new Ship().hits).toEqual([1]);
  expect(new Ship(1).hits).toEqual([1]);
  expect(new Ship(5).hits).toEqual([1, 2, 3, 4, 5]);
  expect(new Ship(7).hits).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it("Check hit", () => {
  expect(new Ship(5).hit(2)).toEqual([1, 2, -3, 4, 5]);
});

it("Check sunk", () => {
  let ship = new Ship(5);

  expect(ship.isSunk).toBeFalsy();

  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);

  expect(ship.isSunk).toBeTruthy();
});
