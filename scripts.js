const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const grid3 = document.querySelector(".grid3");
const grid4 = document.querySelector(".grid4");
const grid5 = document.querySelector(".grid5");
const grid6 = document.querySelector(".grid6");
const grid7 = document.querySelector(".grid7");
const grid8 = document.querySelector(".grid8");
const grid9 = document.querySelector(".grid9");

let player1Turn = true; // X
let player2Turn = false; // O

//Factory Function
function gridObject(grid, positionTaken, playerInGrid) {
  return {
    grid: grid,
    positionTaken: positionTaken,
    playerInGrid: playerInGrid,
  };
}

const gridOne = gridObject(grid1, false, "one");
const gridTwo = gridObject(grid2, false, "two");
const gridThree = gridObject(grid3, false, "three");
const gridFour = gridObject(grid4, false, "four");
const gridFive = gridObject(grid5, false, "five");
const gridSix = gridObject(grid6, false, "six");
const gridSeven = gridObject(grid7, false, "seven");
const gridEight = gridObject(grid8, false, "eight");
const gridNine = gridObject(grid9, false, "nine");

const gridArray = [
  gridOne,
  gridTwo,
  gridThree,
  gridFour,
  gridFive,
  gridSix,
  gridSeven,
  gridEight,
  gridNine,
];

startGame();

function startGame() {
  for (let i = 0; i < gridArray.length; i++) {
    if (gridArray[i].positionTaken === false) {
      gridArray[i].grid.addEventListener("click", () => {
        if (player1Turn === true) {
          gridArray[i].grid.textContent = "X";
          player1Turn = false;
          player2Turn = true;
          gridArray[i].positionTaken = true;
          gridArray[i].playerInGrid = "player1";
        } else {
          gridArray[i].grid.textContent = "O";
          player1Turn = true;
          player2Turn = false;
          gridArray[i].positionTaken = true;
          gridArray[i].playerInGrid = "player2";
        }
      });
    }
  }
}

let interval = setInterval(checkWinningCondition, 1000);

function checkWinningCondition() {
  if (
    (gridOne.playerInGrid === gridFour.playerInGrid &&
      gridFour.playerInGrid === gridSeven.playerInGrid) ||
    (gridTwo.playerInGrid === gridFive.playerInGrid &&
      gridFive.playerInGrid === gridEight.playerInGrid) ||
    (gridThree.playerInGrid === gridSix.playerInGrid &&
      gridSix.playerInGrid === gridNine.playerInGrid) ||
    (gridOne.playerInGrid === gridTwo.playerInGrid &&
      gridTwo.playerInGrid === gridThree.playerInGrid) ||
    (gridFour.playerInGrid === gridFive.playerInGrid &&
      gridFive.playerInGrid === gridSix.playerInGrid) ||
    (gridSeven.playerInGrid === gridEight.playerInGrid &&
      gridEight.playerInGrid === gridNine.playerInGrid) ||
    (gridOne.playerInGrid === gridFive.playerInGrid &&
      gridFive.playerInGrid === gridNine.playerInGrid) ||
    (gridThree.playerInGrid === gridFive.playerInGrid &&
      gridFive.playerInGrid === gridSeven.playerInGrid)
  ) {
    for (let i = 0; i < gridArray.length; i++) {
      gridArray[i].grid.style.pointerEvents = "none";
    }
    // very helpful stackoverflow post on stopping event listener once winning conditon
    // is met, in this case, I don't wanna spend more time thinking about refactoring
    // the for loop to each indivudal function then remove all event listener, this
    // solution with css works perfectly

    alert("game over");
    clearInterval(interval);
  }
}

const restartButton = document.querySelector("button");
restartButton.addEventListener("click", () => {
  location.reload();
});
