function positionToInt(arr) {
  // add a check to see if both are less then 8.
  return arr[0] + 8 * arr[1];
}

function intToPosition(intgr) {
  const x = intgr % 8;
  const y = Math.floor(intgr / 8);
  return [x, y];
}

function isMoveLegit(pos, sizes, actions) {
  // all parameters are in an array. one position, return true if within bounds
  const action = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
  };
  const results = [];
  for (let i = 0; i < 2; i += 1) {
    results.push(action[actions[i]](pos[i], sizes[i])());
    // doesnt work
  }
  console.log(results);
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
  }
}

const test = [1, 4];
const intTest = positionToInt(test);
console.log(intTest);
console.log(intToPosition(intTest));
isMoveLegit([0, 2], [1, 2], ['add', 'add']);
// const knightMoves = (function knightMoves(start, end) {

// })();
