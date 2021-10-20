let board = document.getElementsByClassName("gameboard")[0];

// mantains the gameboard array
let gameBoard = (() =>{
  
  let gameArray = 
  ["X", " "," ",
   " ", "O","O",
   " ", " "," "];
  
  return gameArray
})();

// creates player
let player = (name, marker) => {
  return {name, marker}
};


// displays Gameboard entries on HTML
let displayBoard = () => {
    for (let i = 0; i <= gameBoard.length; i++){
      if (gameBoard[i] === "X" || gameBoard[i] === "O"){
        board.getElementsByClassName("box")[i].innerHTML = gameBoard[i];
      }
    }
};


// function that gets the click value from the user
let clickBoard = () => {
  let children = board.children;
  let arr = Array.from(children)
  
  arr.forEach(function(el){
    el.addEventListener("click", () => {
      let dataset = el.dataset.number;
      console.log(+dataset)
      return +dataset;
    })
  })
}

clickBoard();
displayBoard();





