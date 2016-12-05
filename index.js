var board = [['_', '_', '_'],
             ['_', '_', '_'],
             ['_', '_', '_']]

function makeBoard() {
  board = [['_', '_', '_'],
         ['_', '_', '_'],
         ['_', '_', '_']]
}

function startTicTackToe() {
  makeBoard()
  return 'Use matrix indicies for this array of arrays to detrermain where you want to place your turn' + '[[0,0, 0,1, 0,2], [1,0, 1,1, 1,2], [2,0, 2,1, 2,2]]'
}

function markSpot(row, col, player) {
  if (board[row][col] === 'X' || board[row][col] === 'O') {
    return 'Player ' + player + 'please select another spot.'
  }
  if (player === 1) {
    board[row][col] = 'X';
  }
  if (player === 2) {
    board[row][col] = 'O';
  }
  boardCheck()
  return board;
}

function boardCheck() {
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    return 'Player 1 you win!'
  }
}
