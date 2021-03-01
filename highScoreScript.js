var back = document.querySelector("#back");
var clear = document.querySelector("#clearButton");
var userInitials = document.querySelector("#userinitials");
var userScore = document.querySelector("#userscore");

renderScores();

function renderScores(){
    var jsonString = localStorage.getItem("scoringObject");
    var retrievedObject = JSON.parse(jsonString);

document.getElementById('userinitials').innerHTML = retrievedObject.initials
document.getElementById('userscore').innerHTML = retrievedObject.score

initials=retrievedObject.initials;
score=retrievedObject.score

console.log(retrievedObject)


}

function goBack(event) {
    event.preventDefault();
    window.location = 'index.html';
}

function clearScores() {
    localStorage.clear();
    initials="";
    score="";
    document.getElementById('userinitials').innerHTML = initials
    document.getElementById('userscore').innerHTML = score
}

back.addEventListener("click", goBack);
clear.addEventListener("click", clearScores);
