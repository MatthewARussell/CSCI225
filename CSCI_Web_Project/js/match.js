//created by Matthew Russell
var mlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var img1 = "../CSCI_Web_Project/imgs/ACE spade.png";
var img2 = "../CSCI_Web_Project/imgs/ACE club2.0.png";
var img3 = "../CSCI_Web_Project/imgs/ACE diamonds.png";
var img4 = "../CSCI_Web_Project/imgs/ACE heart.png";
var img5 = "../CSCI_Web_Project/imgs/two diamond.png";
var img6 = "../CSCI_Web_Project/imgs/two heart.png";

var counter=0;
var s,t,sh,matches = 0,cc=0;
var color;
color = document.getElementById("m").style.backgroundColor;
function ranimg() {
var x;
for(var i=1;i<=6;i++){
    for(var x=0;x<=1;x++){
        if(i==1){
           document.getElementById("i"+num1()).src = img1;
           console.log(mlist);
        }
        if(i==2){
            document.getElementById("i"+num1()).src = img2;
        }
        if(i==3){
            document.getElementById("i"+num1()).src = img3;
        }
        if(i==4){
            document.getElementById("i"+num1()).src = img4;
        }
        if(i==5){
            document.getElementById("i"+num1()).src = img5;
        }
        if(i==6){
            document.getElementById("i"+num1()).src = img6;
            
        }
    }
}}
function show(){
    console.log("function called");
for(var l = 0;l<=11;l++){
    document.getElementById("i"+l).style.visibility ="hidden";
}}

function num1(){
   var norp = false;
   while(norp == false){
     var j = Math.floor((Math.random() * (13 - 1)));
     if(j in mlist ){
         delete mlist[j];
         norp = true;
         return j;

     }
   }
    
}

function match(i,x){
 document.getElementById(i).style.visibility = "visible";
 document.getElementsByTagName("TD")[x].style.backgroundColor ="white";

if(counter ==1){
    if(s.src == document.getElementById(i).src){
        s.style.visibility = "visible";
        document.getElementById(i).style.visibility = "visible";
        counter =0;
        console.log("its a match");
        var k =1;
        matches++;
        setTimeout(showmatches,500);
    }
    else{
        var k =1;
        s.style.visibility = "hidden";
        document.getElementsByTagName("TD")[t].style.backgroundColor = color;
        document.getElementById(i).style.visibility = "visible";
        sh = this.document.getElementById(i);
        setTimeout(hidecard,300);
        document.getElementsByTagName("TD")[x].style.backgroundColor = color;
        counter = 0;
    }
}
 if(counter == 0 && k!= 1){
    t=x;
     s = document.getElementById(i);
     counter++;
 }

}
function hidecard(){
    console.log("hello12");
    sh.style.visibility = "hidden";
}
function showmatches(){
    window.alert("You have "+matches+" pair of matching cards!!!");
    if(matches == 6){
        window.alert("You have matched all of the reamining cards, YOU WIN!!!");
    }
}
function Mcolor(){
    cc++;
    if(cc==1){
        color = "yellow";
        for(var i = 9;i<=20;i++){
        document.getElementsByTagName("TD")[i].style.backgroundColor = color;
    }}
    if(cc==2){
        color = "green"
        for(var i = 9;i<=20;i++){
            document.getElementsByTagName("TD")[i].style.backgroundColor = color;
        }
    }
        if(cc==3){
        color = "red"
        for(var i = 9;i<=20;i++){
            document.getElementsByTagName("TD")[i].style.backgroundColor = color;
        }
        cc=0;
    }
    
}