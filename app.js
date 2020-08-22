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

console.log("Default queen's direction: " + queen.direction);

console.log(
  "Default queen's position: " + positionLog[queen.position.x][queen.position.y]
);

changeDirection("NW");
jumpMoveForward(2);
updatePosition();

function changeDirection(direction) {
  switch (direction) {
    case "N":
      queen.direction = "N";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "S":
      queen.direction = "S";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "E":
      queen.direction = "E";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "W":
      queen.direction = "W";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "NE":
      queen.direction = "NE";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "NW":
      queen.direction = "NW";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "SE":
      queen.direction = "SE";
      console.log("Current queen's direction: " + queen.direction);
      break;

    case "SW":
      queen.direction = "SW";
      console.log("Current queen's direction: " + queen.direction);
      break;
  }
}

function jumpMoveForward(steps) {
  switch (queen.direction) {
    case "N":
      var xposition = queen.position.x - steps;
      var yposition = queen.position.y;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;

    case "S":
      var xposition = queen.position.x + steps;
      var yposition = queen.position.y;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "E":
      var xposition = queen.position.x;
      var yposition = queen.position.y + steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "W":
      var yposition = queen.position.x;
      var yposition = queen.position.y - steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "NE":
      var xposition = queen.position.x - steps;
      var yposition = queen.position.y + steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "NW":
      var xposition = queen.position.x - steps;
      var yposition = queen.position.y - steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "SE":
      var xposition = queen.position.x + steps;
      var yposition = queen.position.y + steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
    case "SW":
      var xpositiion = queen.position.x + steps;
      var yposition = queen.position.y - steps;
      if (xposition < 0 || xposition > 8 || yposition < 0 || yposition > 8) {
        console.log("Queen moved out of the chessboard");
      } else {
        queen.position.x = xposition;
        queen.position.y = yposition;
        console.log(
          "Current queen's position: " +
            positionLog[queen.position.x][queen.position.y]
        );
      }
      break;
  }
}

function updatePosition() {
  queen.whereabouts.push(positionLog[queen.position.x][queen.position.y]);
  console.log(queen.whereabouts);
}
