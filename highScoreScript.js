var back = document.querySelector("#back");
var clear = document.querySelector("#clearButton");
var userInitials = document.querySelector("#userinitials");
var userScore = document.querySelector("#userscore");
var newDiv = document.getElementById('scores');

renderScores();

function renderScores(){
    var jsonString = localStorage.getItem("allEntries");
    var allEntries = JSON.parse(jsonString);

if(allEntries !== null){
for (i=0;i<allEntries.length;i++){
    var newSpan = document.createElement('li');
    newSpan.innerText = "Name: " +allEntries[i].initials +" || Score: "+ allEntries[i].score;
    newSpan.id = "newli_" + i;
    newSpan.className = "newli";
    newDiv.appendChild(newSpan);
    console.log(allEntries.length)}}
}

function goBack(event) {
    event.preventDefault();
    window.location = 'index.html';
}

function clearScores() {
    localStorage.clear();
        console.log("Hello!")
        document.getElementById("scores").style.display = "none";

}

back.addEventListener("click", goBack);
clear.addEventListener("click", clearScores);
