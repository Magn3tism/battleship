import GameBoard from "../scripts/gameBoard";

describe("Check placing of ships", () => {
  it("Check when placing of size 1", () => {
    let board = new GameBoard();
    expect(board.board[0][4]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });

    board.place(0, 4);
    expect(board.board[0][4]).toEqual({
      ship: 1,
      position: 1,
      value: {},
      hit: false,
    });
  });

  it("Check when placing of size 3", () => {
    let board = new GameBoard();
    expect(board.board[0][4]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });
    expect(board.board[0][5]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });

    board.place(0, 4, 3);
    expect(board.board[0][4]).toEqual({
      ship: 1,
      position: 1,
      value: {},
      hit: false,
    });
    expect(board.board[0][5]).toEqual({
      ship: 1,
      position: 2,
      value: {},
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: 1,
      position: 3,
      value: {},
      hit: false,
    });
  });

  it("Check when placing multiple ships", () => {
    let board = new GameBoard();
    expect(board.board[0][4]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });
    expect(board.board[0][5]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });

    board.place(0, 4, 3);
    expect(board.board[0][4]).toEqual({
      ship: 1,
      position: 1,
      value: {},
      hit: false,
    });
    expect(board.board[0][5]).toEqual({
      ship: 1,
      position: 2,
      value: {},
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: 1,
      position: 3,
      value: {},
      hit: false,
    });

    expect(board.board[7][3]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });
    board.place(7, 3);
    expect(board.board[7][3]).toEqual({
      ship: 2,
      position: 1,
      value: {},
      hit: false,
    });
  });

  it("Check placing multiple ships on same location", () => {
    let board = new GameBoard();
    expect(board.board[0][4]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: false,
    });

    board.place(0, 4, 3);
    expect(board.place(0, 4)).toBe("Ship already exists");
    expect(board.place(0, 5)).toBe("Ship already exists");
    expect(board.place(0, 5)).toBe("Ship already exists");
  });

  it("Check placing ships at end", () => {
    let board = new GameBoard();
    expect(board.place(0, 8, 3)).toBe("Cannot place");
  });
});

describe("Check Hit", () => {
  let board = new GameBoard();

  it("Check hit on empty space", () => {
    expect(board.recieveAttack(3, 4)).toBe("Miss");
    expect(board.board[3][4]).toEqual({
      ship: null,
      position: null,
      value: 0,
      hit: true,
    });
  });

  it("Check hit on ship", () => {
    board.place(3, 5, 3);
    expect(board.recieveAttack(3, 5)).toBe("Hit");
    expect(board.board[3][5]).toEqual({
      ship: 1,
      position: 1,
      value: {},
      hit: true,
    });

    board.recieveAttack(3, 6);
    board.recieveAttack(3, 7);

    expect(board.board[3][5].value.hits[0]).toBe(-1);
    expect(board.board[3][6].value.hits[1]).toBe(-2);
    expect(board.board[3][7].value.hits[2]).toBe(-3);
  });

  it("Check hit on already hit tile", () => {
    expect(board.recieveAttack(3, 5)).toBeFalsy();
  });
});

describe("Check Sunk", () => {
  let board = new GameBoard();
  it("Check sunk on empty board", () => {
    expect(board.checkAllSunk()).toBeTruthy();
  });

  it("Check sunk on board with one ship", () => {
    board.place(3, 4);
    expect(board.checkAllSunk()).toBeFalsy();
    board.recieveAttack(3, 4);
    expect(board.checkAllSunk()).toBeTruthy();
  });

  it("Check sunk on board with multiple ships", () => {
    board.place(3, 7, 3);
    board.place(8, 2, 7);

    expect(board.checkAllSunk()).toBeFalsy();
    board.recieveAttack(3, 7);
    expect(board.checkAllSunk()).toBeFalsy();
    board.recieveAttack(3, 8);
    board.recieveAttack(3, 9);
    expect(board.checkAllSunk()).toBeFalsy();

    board.recieveAttack(8, 2);
    board.recieveAttack(8, 3);
    expect(board.checkAllSunk()).toBeFalsy();
    board.recieveAttack(8, 4);
    board.recieveAttack(8, 5);
    board.recieveAttack(8, 6);
    board.recieveAttack(8, 7);
    board.recieveAttack(8, 8);
    expect(board.checkAllSunk()).toBeTruthy();
  });
});
