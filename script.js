let main = (name) =>{

    let board = document.getElementsByClassName("gameboard")[0];
    let gameBoard = 
    [" ", " "," ",
    " ", " "," ",
    " ", " "," "];


    let player = (name) => {
        return {name}
    }

    let Kevin = player("Kevin")
    let Erin = player("Erin")

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
        let toggle = true
        let marker = (toggle)=>{
            if(toggle === true){
                return 'X'
            }else{
                return 'O'
            }
        }
        
        let children = board.children;  
        let arr = Array.from(children)  
        
        arr.forEach(function(el){
            el.addEventListener("click", () => {
            if (el.innerHTML === ' '){
            gameBoard[el.dataset.number -1] = marker(toggle);
            console.log(gameBoard);
            el.innerHTML = marker(toggle)}
            else if( el.innerHTML === "X" || el.innerHTML === "O"){console.log("already taken")}
            
            checkWinner();
            
            toggle = !toggle;
            console.log(toggle);
            console.log(marker);
        })
    })
    };
            clickBoard();
    };

main();







