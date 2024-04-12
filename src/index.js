function positionToInt(arr) {
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
  // all parameters are arrays
  // returns the possible move if it is legit. Else returns false
  const results = [];
  for (let i = 0; i < 2; i += 1) {
    results.push(getCalcSize(pos[i], sizes[i], actions[i]));
  }
  if (results[0] >= 0 && results[0] < 8) {
    if (results[1] >= 0 && results[1] < 8) return [results[0], results[1]];
  }
  return false;
}

function getPossibleMoves(pos) {
  const total = 3;
  const possibleMoves = [];
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
      const move = isMoveLegit(pos, [x, y], comb);
      if (move !== false) {
        possibleMoves.push(positionToInt(move));
        console.log(`Possible move from ${pos}: ${move}`);
      }
    });
  }
  return possibleMoves;
}

function getGraph() {
  const graph = [];
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      graph.push(getPossibleMoves([x, y]));
    }
  }
  return graph;
}

const knightGraph = getGraph();
console.table(knightGraph);
// const knightMoves = (function knightMoves(start, end) {

// })();
