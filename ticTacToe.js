// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid){

//if all elments in the row are the same and not empty print and exit function
//loop through the rows 
//print and loop through the function 
   for (let i = 0; i<3 ; i++){
    if (grid[i][0]=== grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] !== ""){
        console.log(`${grid[i][0]} won \n\n X lost`);
        return grid;
    }
    }


    //if all elemnts in the column are the same and not empty 
    //loop through the column 
    //print and exit the function 
   for (let i = 0; i<3 ; i++){
    if (grid[0][i]=== grid[1][i] && grid[1][i] === grid[2][i] && grid [0][i]!==""){
        console.log(`${grid[0][i]} won\n\n O lost`);
        return grid;
    }
   }

   //if all elments in topright to bottom left diagonal are the same and not empty 
   //check the diagonalwin
   //prit and return function 
   if (grid[0][2]=== grid[1][1] && grid[1][1] === grid[2][0] && grid [0] [2]!==""){
    console.log(`${grid[0][2]} won\n\n X lost`)
    return grid;
   }

   //if all elemts in the top left to bottom right diagonal are the same and not empty 
   //check the diagonalwin inverse 
   //print and return 
    if (grid[0][0]=== grid[1][1] && grid[1][1] === grid[2][2] && grid [0] [0]!==""){
        console.log(`${grid[0][0]} won\n\n X lost`)
        return grid;
    }
        
}

evaluatePlay(rowWin);
evaluatePlay(colWin)
evaluatePlay(diagonalWin)
evaluatePlay(diagonalWinInverse)

    
