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
function gridObject (grid, positionTaken, playerInGrid) {
    return {grid: grid, 
            positionTaken: positionTaken, 
            playerInGrid: playerInGrid
    };
}

const gridOne = gridObject(grid1, false, null);
const gridTwo = gridObject(grid2, false, null);
const gridThree = gridObject(grid3, false, null);
const gridFour = gridObject(grid4, false, null);
const gridFive = gridObject(grid5, false, null);
const gridSix = gridObject(grid6, false, null);
const gridSeven = gridObject(grid7, false, null);
const gridEight = gridObject(grid8, false, null);
const gridNine = gridObject(grid9, false, null);

const gridArray = [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine];

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
        })
    }
};

// grid1.addEventListener("click", () => {
//     grid1.textContent = "X";
// });