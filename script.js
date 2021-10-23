let board = document.getElementsByClassName("gameboard")[0];
let gameBoard = 
  [" ", " "," ",
   " ", " "," ",
   " ", " "," "];


let player = (name, marker) => {
  return {name, marker}
}
let Kevin = player("Kevin", "X")
let Erin = player("Erin", "O")

let checkWinner = () => {
  if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X" ||
      gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X" ||
      gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X" ||
      gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X" ||
      gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X" ||
      gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X" ||
      gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X" ||
      gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X"){
      console.log(`${Kevin.name} wins!`)} else if(
      gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O" ||
      gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O" ||
      gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O" ||
      gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O" ||
      gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O" ||
      gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O" ||
      gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O" ||
      gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O"){
        console.log(`${Erin.name} wins!`);
      }
      }


let clickBoard = () =>{
  
  let children = board.children;  
  let arr = Array.from(children)  
  
  arr.forEach(function(el){
    el.addEventListener("click", () => {
      if (el.innerHTML === ' '){
      gameBoard[el.dataset.number -1] = "O";
      console.log(gameBoard);
      el.innerHTML = "O"}
      else if( el.innerHTML === "X" || el.innerHTML === "O"){console.log("already taken")}
      
      checkWinner();
      
    })
  })
};

clickBoard();








