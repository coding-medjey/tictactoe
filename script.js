function rowFilledWith(row, symbol) {
  let i = 0;
  if (row[i] === symbol && row[i + 1] === symbol && row[i + 2] === symbol) {
    return true;
  } else {
    return false;
  }
}

function anyRowFilledWith(board, symbol) {
  let i = 0;
  while (i < board.length) {
    let j = 0;
    if (
      board[i][j] === symbol &&
      board[i][j + 1] === symbol &&
      board[i][j + 2] === symbol
    ) {
      return true;
    }
    i++;
  }
  return false;
}

function transForm(board) {
  let j = 0;
  let result = [];
  while (j < board.length) {
    let i = 0;
    while (j < board.length) {
      result.push([board[i][j], board[i + 1][j], board[i + 2][j]]);
      j++;
    }
  }
  return result;
}

function crossCheckA(board, symbol) {
  let i = 0;
  while (i < board.length) {
    let j = 0;
    if (
      board[i][j] === symbol &&
      board[i + 1][j + 1] === symbol &&
      board[i + 2][j + 2] === symbol
    ) {
      return true;
    }
    return false;
  }
}

function crossCheckB(board, symbol) {
  let i = 0;
  let j = 0;

  if (
    board[i + 2][j] === symbol &&
    board[i + 1][j + 1] === symbol &&
    board[i][j + 2] === symbol
  ) {
    return true;
  }
  return false;
}

function anyColFiledWith(board, symbol) {
  let newboard = transForm(board);
  let i = 0;
  while (i < newboard.length) {
    let j = 0;
    if (
      newboard[i][j] === symbol &&
      newboard[i][j + 1] === symbol &&
      newboard[i][j + 2] === symbol
    ) {
      return true;
    }
    i++;
  }
  return false;
}

function boardFilled(board) {
  let i = 0;
  while (i < board.length) {
    let j = 0;
    while (j < board[i].length) {
      if (board[i][j] === 0) {
        return false;
      }
      j++;
    }
    i++;
  }
  return true;
}
