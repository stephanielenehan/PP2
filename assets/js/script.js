//Code based on you tube tutorial by Kenny Yip Coding. Link in ReadMe.
var me; 
var myScore = 0; 
var computer;
var computerScore = 0;

var choices = ["rock", "paper", "scissors"]; 

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        

        let choice = document.createElement("img"); 
        choice.id = choices[i]; 
        choice.src = choices[i] + "assets/images/.png"; 
        choice.addEventListener("click", selectChoice); 
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    me = this.id;
    document.getElementById("my-choice").src = me + "assets/images/.png"; 

    computer = choices[Math.floor(Math.random() * 3 )];
    document.getElementById("computer-choice").src = computer + "assets/images/.png";



}