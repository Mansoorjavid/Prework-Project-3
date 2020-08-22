let positionLog = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

let queen = {
  direction: "S",
  position: {
    x: 4,
    y: 4,
  },
  whereabouts: [],
};

console.log(
  "Default queen's position: " + positionLog[queen.position.x][queen.position.y]
);
console.log("Default queen's direction: " + queen.direction);

changeDirection("SW");
jumpMoveForward(4);
updatePosition();

console.log(
  "Current queen's position: " + positionLog[queen.position.x][queen.position.y]
);
console.log("Current queen's direction: " + queen.direction);

console.log(queen.whereabouts);

errorMessage();

function changeDirection(direction) {
  switch (direction) {
    case "N":
      queen.direction = "N";
      break;

    case "S":
      queen.direction = "S";
      break;

    case "E":
      queen.direction = "E";
      break;

    case "W":
      queen.direction = "W";
      break;

    case "NE":
      queen.direction = "NE";
      break;

    case "NW":
      queen.direction = "NW";
      break;

    case "SE":
      queen.direction = "SE";
      break;

    case "SW":
      queen.direction = "SW";
      break;
  }
}

function jumpMoveForward(steps) {
  switch (queen.direction) {
    case "N":
      queen.position.x -= steps;
      break;

    case "S":
      queen.position.x += steps;
      break;
    case "E":
      queen.position.y += steps;
      break;
    case "W":
      queen.position.y -= steps;
      break;
    case "NE":
      queen.position.x -= steps;
      queen.position.y += steps;
      break;
    case "NW":
      queen.position.x -= steps;
      queen.position.y -= steps;
      break;
    case "SE":
      queen.position.x += steps;
      queen.position.y += steps;
      break;
    case "SW":
      queen.position.x += steps;
      queen.position.y -= steps;
      break;
  }
}

function updatePosition() {
  queen.whereabouts.push(positionLog[queen.position.x][queen.position.y]);
}

function errorMessage() {
  if (
    positionLog[queen.position.x][queen.position.y] === undefined ||
    positionLog[queen.position.x][queen.position.y] < 0
  ) {
    console.log("you cannot move the queen out of the chessboard!");
  }
}
