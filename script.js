

function tossStart() {
    let userInput = prompt("Player1: choose head or tail?").toLowerCase();

    if (userInput == "head") {
    document.getElementById("player1Choice").innerHTML = "head";
    document.getElementById("player2Choice").innerHTML = "tail";
}
    else if (userInput == "tail") {
    document.getElementById("player1Choice").innerHTML = "tail";
    document.getElementById("player2Choice").innerHTML = "head";
} 
    let tossResult = Math.random();
    let result;
    if (tossResult > 0.5) {
        result = "head";
    }
    else{
        result = "tail";
    }
    
    if(result == userInput) {
        document.getElementById("winner").innerHTML = `Player 1 won!!! the result is ${result} <img src="./images/yess.gif" id="victory">`; 
    }
    else {
        document.getElementById("winner").innerHTML = `Player 2 won!!! the result is ${result} <img src="./images/yess.gif" id="victory">`;
    }
};
tossStart();














