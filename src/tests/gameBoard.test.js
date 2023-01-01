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
      value: -1,
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: 1,
      position: 3,
      value: -1,
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
      value: -1,
      hit: false,
    });
    expect(board.board[0][6]).toEqual({
      ship: 1,
      position: 3,
      value: -1,
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
});
