import createList from './linkedlist.js';

function positionToInt(arr) {
  return arr[0] + 8 * arr[1];
}

function intToPosition(intgr) {
  const x = intgr % 8;
  const y = Math.floor(intgr / 8);
  return [x, y];
}

function createNode(val = null, nxt = null) {
  const value = val;
  const next = nxt;
  return { value, next };
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

function getCopy(original) {
  const newList = createList();
  original.getArray().forEach(position => {
    newList.append(position);
  });
  return newList;
}

function searchBFS(queue, end) {
  const current = queue.shift();
  if (knightGraph[current.getValue()].includes(end)) {
    current.append(end);
    return current;
  }
  knightGraph[current.getValue()].forEach(move => {
    const copy = getCopy(current);
    copy.append(move);
    queue.push(copy);
  });
  return searchBFS(queue, end);
}

function knightMoves(start, end) {
  const queue = [];
  const linkedlist = createList();
  linkedlist.append(positionToInt(start));
  queue.push(linkedlist);
  const closest = searchBFS(queue, positionToInt(end));
  console.log(closest.stringify());
}
console.table(knightGraph);
knightMoves([1, 1], [7, 7]);
