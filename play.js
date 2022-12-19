"use strict";

// creates the turn variable and outputs it
let turn = "X";
document.getElementById("turnCounter").innerHTML= "Player turn: "+ turn;

// creates variables that record player's winning scores
let p1Score = 0;
let p2Score = 0;
document.getElementById("P1S").innerHTML = "Player 1's score: " + p1Score;
document.getElementById("P2S").innerHTML = "Player 2's score: " + p2Score;

// creates a variable that records the amount of restarts
let redo = 0;

// creates global variables that prevent the same button from being clicked on twice
let top1 = false;
let top2 = false;
let top3 = false;
let mid1 = false;
let mid2 = false;
let mid3 = false;
let bot1 = false;
let bot2 = false;
let bot3 = false;

// creates global variables to check who won
let tlWin = 0;
let tmWin = 0;
let trWin = 0;
let mlWin = 0;
let mmWin = 0;
let mrWin = 0;
let blWin = 0;
let bmWin = 0;
let brWin = 0;

// functions for the top buttons
function topL() {
    if(top1 == false){
        imageSwap("tlBTN");
        turns();
        turnOutput();
        top1 = true;
        if(turn == "X"){tlWin--;}else{tlWin++;}
        winner();
    }
}

function topM() {
    if(top2 == false){
        imageSwap("tmBTN");
        turns();
        turnOutput();
        top2 = true;
        if(turn == "X"){tmWin--;}else{tmWin++;}
        winner();
    }
}

function topR() {
    if(top3 == false){
        imageSwap("trBTN");
        turns();
        turnOutput();
        top3 = true;
        if(turn == "X"){trWin--;}else{trWin++;}
        winner();
    }
}



// functions for the middle buttons
function midL() {
    if(mid1 == false){
        imageSwap("mlBTN");
        turns();
        turnOutput();
        mid1 = true;
        if(turn == "X"){mlWin--;}else{mlWin++;}
        winner();
    }
}

function midM() {
    if(mid2 == false){
        imageSwap("mmBTN");
        turns();
        turnOutput();
        mid2 = true;
        if(turn == "X"){mmWin--;}else{mmWin++;}
        winner();
    }
}

function midR() {
    if(mid3 == false){
        imageSwap("mrBTN");
        turns();
        turnOutput();
        mid3 = true;
        if(turn == "X"){mrWin--;}else{mrWin++;}
        winner();
    }
}



// functions for the bottom buttons
function botL() {
    if(bot1 == false){
        imageSwap("blBTN");
        turns();
        turnOutput();
        bot1 = true;
        if(turn == "X"){blWin--;}else{blWin++;}
        winner();
    }
}

function botM() {
    if(bot2 == false){
        imageSwap("bmBTN");
        turns();
        turnOutput();
        bot2 = true;
        if(turn == "X"){bmWin--;}else{bmWin++;}
        winner();
    }
}

function botR() {
    if(bot3 == false){
        imageSwap("brBTN");
        turns();
        turnOutput();
        bot3 = true;
        if(turn == "X"){brWin--;}else{brWin++;}
        winner();
    }
}



// creates a function that switches the images
function imageSwap(a){
    if (turn == "X"){
        document.getElementById(a).src="tttX.png";
    } else if (turn == "O"){
        document.getElementById(a).src="tttO.png"
    }
}

// creates a function that switches the turn
function turns(a){
    if(turn == "O"){
        turn = "X";
    } else {
        turn = "O";
    }
}

//creates a function that updates the player's turn
function turnOutput() {
    document.getElementById("turnCounter").innerHTML= "Player turn: "+ turn;
}

//creates a function to find who won
function winner(){
   if((tlWin == 1 && tmWin == 1 && trWin == 1)||(mlWin == 1 && mmWin == 1 && mrWin == 1)||(blWin == 1 && bmWin == 1 && brWin == 1)||(tlWin == 1 && mlWin == 1 && blWin == 1)||(tmWin == 1 && mmWin == 1 && bmWin == 1)||(trWin == 1 && mrWin == 1 && brWin == 1)||(tlWin == 1 && mmWin == 1 && brWin == 1)||(trWin == 1 && mmWin == 1 && blWin == 1)){
    if(redo%2 == 1){
        p2Score++;
    } else if(redo%2 == 0){
        p1Score++;
    }

    if(tlWin == 1 && tmWin == 1 && trWin == 1){
        highlight("tlBTN","tmBTN","trBTN",tlWin,tmWin,trWin);
    } else if(mlWin == 1 && mmWin == 1 && mrWin == 1){
        highlight("mlBTN","mmBTN","mrBTN",mlWin,mmWin,mrWin);
    } else if(blWin == 1 && bmWin == 1 && brWin == 1){
        highlight("blBTN","bmBTN","brBTN",blWin,bmWin,brWin);
    } else if(tlWin == 1 && mlWin == 1 && blWin == 1){
        highlight("tlBTN","mlBTN","blBTN",tlWin,mlWin,blWin)
    } else if(tmWin == 1 && mmWin == 1 && bmWin == 1){
        highlight("tmBTN","mmBTN","bmBTN",tmWin,mmWin,bmWin);
    } else if(trWin == 1 && mrWin == 1 && brWin == 1){
        highlight("trBTN","mrBTN","brBTN",trWin,mrWin,brWin);
    } else if(tlWin == 1 && mmWin == 1 && brWin == 1){
        highlight("tlBTN","mmBTN","brBTN",tlWin,mmWin,brWin);
    } else if(trWin == 1 && mmWin == 1 && blWin == 1){
        highlight("trBTN","mmBTN","blBTN",trWin,mmWin,blWin);
    }

    document.getElementById("turnCounter").innerHTML= "Player X won the game";
    document.getElementById("topLeft").disabled = true;
    document.getElementById("topMiddle").disabled = true;
    document.getElementById("topRight").disabled = true;
    document.getElementById("middleLeft").disabled = true;
    document.getElementById("middleMiddle").disabled = true;
    document.getElementById("middleRight").disabled = true;
    document.getElementById("bottomLeft").disabled = true;
    document.getElementById("bottomMiddle").disabled = true;
    document.getElementById("bottomRight").disabled = true;
    }else if ((tlWin == -1 && tmWin == -1 && trWin == -1)||(mlWin == -1 && mmWin == -1 && mrWin == -1)||(blWin == -1 && bmWin == -1 && brWin == -1)||(tlWin == -1 && mlWin == -1 && blWin == -1)||(tmWin == -1 && mmWin == -1 && bmWin == -1)||(trWin == -1 && mrWin == -1 && brWin == -1)||(tlWin == -1 && mmWin == -1 && brWin == -1)||(trWin == -1 && mmWin == -1 && blWin == -1)){
    if(redo%2 == 1){
        p1Score++;
    } else if(redo%2 == 0){
        p2Score++;
    }

    if(tlWin == -1 && tmWin == -1 && trWin == -1){
        highlight("tlBTN","tmBTN","trBTN",tlWin,tmWin,trWin);
    } else if(mlWin == -1 && mmWin == -1 && mrWin == -1){
        highlight("mlBTN","mmBTN","mrBTN",mlWin,mmWin,mrWin);
    } else if(blWin == -1 && bmWin == -1 && brWin == -1){
        highlight("blBTN","bmBTN","brBTN",blWin,bmWin,brWin);
    } else if(tlWin == -1 && mlWin == -1 && blWin == -1){
        highlight("tlBTN","mlBTN","blBTN",tlWin,mlWin,blWin)
    } else if(tmWin == -1 && mmWin == -1 && bmWin == -1){
        highlight("tmBTN","mmBTN","bmBTN",tmWin,mmWin,bmWin);
    } else if(trWin == -1 && mrWin == -1 && brWin == -1){
        highlight("trBTN","mrBTN","brBTN",trWin,mrWin,brWin);
    } else if(tlWin == -1 && mmWin == -1 && brWin == -1){
        highlight("tlBTN","mmBTN","brBTN",tlWin,mmWin,brWin);
    } else if(trWin == -1 && mmWin == -1 && blWin == -1){
        highlight("trBTN","mmBTN","blBTN",trWin,mmWin,blWin);
    }

    document.getElementById("turnCounter").innerHTML= "Player O won the game";
    document.getElementById("topLeft").disabled = true;
    document.getElementById("topMiddle").disabled = true;
    document.getElementById("topRight").disabled = true;
    document.getElementById("middleLeft").disabled = true;
    document.getElementById("middleMiddle").disabled = true;
    document.getElementById("middleRight").disabled = true;
    document.getElementById("bottomLeft").disabled = true;
    document.getElementById("bottomMiddle").disabled = true;
    document.getElementById("bottomRight").disabled = true;
   } else if ((tlWin == 1 || tlWin == -1)&&(tmWin == 1 || tmWin == -1)&&(trWin == 1 || trWin == -1)&&(mlWin == 1 || mlWin == -1)&&(mmWin == 1 || mmWin == -1)&&(mrWin == 1 || mrWin == -1)&&(blWin == 1 || blWin == -1)&&(bmWin == 1 || bmWin == -1)&&(brWin == 1 || brWin == -1)){
    document.getElementById("turnCounter").innerHTML= "The game was a draw";
   }
   document.getElementById("P1S").innerHTML = "Player 1's score: " + p1Score;
   document.getElementById("P2S").innerHTML = "Player 2's score: " + p2Score;
}

// creates a function that restarts the game 
function restart(){
    // restart the turn variable 
    turn = "X";
    document.getElementById("turnCounter").innerHTML= "Player turn: "+ turn;
    redo++

    // resets global variables that prevent the same button from being clicked on twice
    top1 = false;
    top2 = false;
    top3 = false;
    mid1 = false;
    mid2 = false;
    mid3 = false;
    bot1 = false;
    bot2 = false;
    bot3 = false;

    // resets the winning variables 
    tlWin = 0;
    tmWin = 0;
    trWin = 0;
    mlWin = 0;
    mmWin = 0;
    mrWin = 0;
    blWin = 0;
    bmWin = 0;
    brWin = 0;

    // resets all the boxes
    document.getElementById("tlBTN").src = "tttB.png";
    document.getElementById("tmBTN").src = "tttB.png";
    document.getElementById("trBTN").src = "tttB.png";
    document.getElementById("mlBTN").src = "tttB.png";
    document.getElementById("mmBTN").src = "tttB.png";
    document.getElementById("mrBTN").src = "tttB.png";
    document.getElementById("blBTN").src = "tttB.png";
    document.getElementById("bmBTN").src = "tttB.png";
    document.getElementById("brBTN").src = "tttB.png";

    // re enables buttons
    document.getElementById("topLeft").disabled = false;
    document.getElementById("topMiddle").disabled = false;
    document.getElementById("topRight").disabled = false;
    document.getElementById("middleLeft").disabled = false;
    document.getElementById("middleMiddle").disabled = false;
    document.getElementById("middleRight").disabled = false;
    document.getElementById("bottomLeft").disabled = false;
    document.getElementById("bottomMiddle").disabled = false;
    document.getElementById("bottomRight").disabled = false;
}

// creates a function that higlights the winning row
function highlight(a,b,c,d,e,f){
    if(d == 1 && e == 1 && f == 1){
        document.getElementById(a).src= "tttXW.png";
        document.getElementById(b).src= "tttXW.png";
        document.getElementById(c).src= "tttXW.png";
    } else if (d == -1 && e == -1 && f == -1){
        document.getElementById(a).src= "tttOW.png";
        document.getElementById(b).src= "tttOW.png";
        document.getElementById(c).src= "tttOW.png";
    }
}