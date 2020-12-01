
// CREATED BY MATTHEW RUSSELL


var list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var c = 0;
var x;
function clicked(i) {
    WinORLose();
    if (document.getElementById(i).innerHTML == "1" && x != 5) {
        document.getElementById(i).innerHTML = "X";
        document.getElementById(i).style.color = "black";
        delete list[i];
        c++;
        WinORLose();
        if (c != 5 || x != 5) {
            computer(list);
        }
    }

}


function computer(list) {

    while (true) {
        var x = Math.floor((Math.random() * (9 - 1)));
        if (x in list) {
            break;
        }

    }
    for (var y = 0; y < list.length; y++) {
        if (x == list[y]) {
            document.getElementById(y).innerHTML = "O";
            document.getElementById(y).style.color = "black";
            delete list[y];
            break;
        }


    }
}


function num() {
    return Math.floor((Math.random() * (9 - 1)));
}


function WinORLose() {
    var s0 = document.getElementById("0").innerHTML;
    var s1 = document.getElementById("1").innerHTML;
    var s2 = document.getElementById("2").innerHTML;
    var s3 = document.getElementById("3").innerHTML;
    var s4 = document.getElementById("4").innerHTML;
    var s5 = document.getElementById("5").innerHTML;
    var s6 = document.getElementById("6").innerHTML;
    var s7 = document.getElementById("7").innerHTML;
    var s8 = document.getElementById("8").innerHTML;
    //horizontal  
    if (s0 == "X" && s1 == "X" && s2 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s0 == "O" && s1 == "O" && s2 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }

    if (s3 == "X" && s4 == "X" && s5 == "X") {
        
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s3 == "O" && s4 == "O" && s5 == "O") {
        ;
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }

    if (s6 == "X" && s7 == "X" && s8 == "X") {
        
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s6 == "O" && s7 == "O" && s8 == "O") {
       
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }
    //vertical
    if (s0 == "X" && s3 == "X" && s6 == "X") {
      
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s0 == "O" && s3 == "O" && s6 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }

    if (s1 == "X" && s4 == "X" && s7 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s1 == "O" && s4 == "O" && s7 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }

    if (s2 == "X" && s5 == "X" && s8 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s2 == "O" && s5 == "O" && s8 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }
    //diagonal
    if (s0 == "X" && s4 == "X" && s8 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s0 == "O" && s4 == "O" && s8 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }

    if (s2 == "X" && s4 == "X" && s6 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
    }
    if (s2 == "O" && s4 == "O" && s6 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
    }
    if (c == 5) {
        window.alert("YOU'RE A SUCKER IT'S A CAT ;) !!!! press reset to play again!");
    }
}

function color() {
    if(document.getElementById(0).className == "blue"){
    for(var i = 0; i<=8;i++){
    document.getElementById(i).setAttribute("class","red");}}
    else{
        for(var i = 0; i<=8;i++){
        document.getElementById(i).setAttribute("class","blue");}}
}