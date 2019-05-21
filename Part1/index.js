let gamePlay = [1,2,3,4,5,6,7,8,9];
let gamePlayResults = [null,null,null,null,null,null,null,null,null];

function play(id) {
    let player = document.getElementById("player");
    let boxId = document.getElementById(id);

    if (boxId.innerText != "X" && boxId.innerText != "O") {
        
        if (player.innerText == "X") {
            boxId.innerText = "X";
            player.innerText = "O";
        }
        else  if (player.innerText == "O") {
            boxId.innerText = "O";
            player.innerText = "X";
        }
        gamePlay[id] = boxId.innerText;
        console.log(gamePlay);
    
        for(var i = 0; i < gamePlay.length; i++) {
            gamePlayResults[i] = typeof gamePlay[i];
        }
    
        checkForWinner(boxId);
    }
}

function checkForWinner(boxId) {
    if (gamePlay[0] == gamePlay[1] && gamePlay[0] == gamePlay[2] || gamePlay[0] == gamePlay[3] && gamePlay[0] == gamePlay[6] 
    ||  gamePlay[0] == gamePlay[4] && gamePlay[0] == gamePlay[8] || gamePlay[1] == gamePlay[4] && gamePlay[1] == gamePlay[7] 
    ||  gamePlay[2] == gamePlay[4] && gamePlay[2] == gamePlay[6] || gamePlay[2] == gamePlay[5] && gamePlay[2] == gamePlay[8] 
    ||  gamePlay[3] == gamePlay[4] && gamePlay[3] == gamePlay[5] || gamePlay[6] == gamePlay[7] && gamePlay[6] == gamePlay[8]) {
        window.alert(`Player ${boxId.innerText} is the winner!`);

        for(var i = 0; i < 9; i++) {
            document.getElementById(i).innerText = "";
            gamePlay[i] = i;
            gamePlayResults[i] = null;
            document.getElementById("player").innerText = "X";
        }
    }
    else if (!gamePlayResults.includes("number")) {
        window.alert("Cat's Game!");
        
        for(var i = 0; i < 9; i++) {
            document.getElementById(i).innerText = "";
            gamePlay[i] = i;
            gamePlayResults[i] = null;
            document.getElementById("player").innerText = "X";
        }
    }
}