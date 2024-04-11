function positionToInt(arr) {
  // add a check to see if both are less then 8.
  return arr[0] + 8 * arr[1];
}

function intToPosition(intgr) {
  const x = intgr % 8;
  const y = Math.floor(intgr / 8);
  return [x, y];
}

function getCalcSize(pos, size, action) {
  const actions = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
  };
  return actions[action](pos, size);
}

function isMoveLegit(pos, sizes, actions) {
  // all parameters are arrays. Returns true if the move is within bounds of the board
  const results = [];
  for (let i = 0; i < 2; i += 1) {
    results.push(getCalcSize(pos[i], sizes[i], actions[i]));
  }
  if (results[0] >= 0 && results[0] < 8) {
    if (results[1] >= 0 && results[1] < 8) return true;
  }
  return false;
}

function nextMove(pos) {
  const total = 3;
  const combinations = [
    ['add', 'add'],
    ['add', 'sub'],
    ['sub', 'add'],
    ['sub', 'sub'],
  ];
  for (let i = 1; i < 3; i += 1) {
    const x = total - i;
    const y = total - x;
    combinations.forEach(comb => {
      if (isMoveLegit(pos, [x, y], comb)) {
        // temporary
        const nextX = getCalcSize(pos[0], x, comb[0]);
        const nextY = getCalcSize(pos[1], y, comb[1]);
        console.log(`Possible move from ${pos}: [${nextX}, ${nextY}]`);
      }
    });
  }
}

const test = [1, 4];
const intTest = positionToInt(test);
console.log(intTest);
console.log(intToPosition(intTest));
console.log(isMoveLegit([4, 2], [1, 2], ['add', 'add']));
nextMove([3, 3]);
// const knightMoves = (function knightMoves(start, end) {

// })();
