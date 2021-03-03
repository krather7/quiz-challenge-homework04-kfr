    //Declaring Global Variables------------------------------------------------------
    var timer;
    var timerCount;
    var questionNumber = 0;
    var allQuestionsAnswered = false;
    //==================================================================================
    //Initial query variables---------------------------------------------------
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".question-count");
var startButton = document.querySelector("#start-button");
var answer00 = document.querySelector("#answer0");
var answer01 = document.querySelector("#answer1");
var answer02 = document.querySelector("#answer2");
var answer03 = document.querySelector("#answer3");
var submitInitials = document.querySelector("#submit");
    //================================================================================
    //Displays answers in console for those that need it
    console.log("Answers: 1:Air Nomads||2:Roku||3:Lava Bending||4:Levitation||5:Blood Bending||6:Kuruk||7:Fire Nation Colonies||8:Raava")
    //================================================================================
    //Local Storage Function that is called when the user clicks Submit---------------
    //If the user obtains a new high score, it will be written on the next page-------
initialsInput=document.querySelector("#initials");
submitInitials.addEventListener("click", function(event) {
    event.preventDefault();
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var initials = document.querySelector("#initials").value;
    var score=timerCount
    var entry = {
        "initials": initials,
        "score": score
    };
    //Makes sure initials only have 3 characters or less
    if (initials.length>=4 || initials == ""){
        alert("Initials must be three characters or less!")
        return
    } else {
      localStorage.setItem("entry", JSON.stringify(entry));
      existingEntries.push(entry);
      localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        window.location = 'highscore.html';
    }
  });
    //================================================================================
    //Quiz Object with  questions and answers-----------------------------------------
var questions = [
    {title: "Avatar Aang is from which nation?",
    choices: ["Air Nomads", "Water Tribes", "Earth Kingdom", "Fire Nation"],
    answerIndex: 0
    },
    {title: "Who was the avatar before Aang?",
    choices: ["Kyoshi", "Roku", "Korra", "Yangchen"],
    answerIndex: 1
    },
    {title: "Bolin can use what specialty of Earth Bending?",
    choices: ["Swamp Bending", "Metal Bending", "Mercury Bending", "Lava Bending"],
    answerIndex: 3
    },
    {title: "If an Air Bender lets go of all earthly attachment they are allowed:",
    choices: ["Arrow Tattoos", "Spirit Bending", "Air Bison", "Levitation"],
    answerIndex: 3
    },
    {title: "This is a powerful yet forbidden form of Water Bending:",
    choices: ["Space Bending", "Plant Bending", "Blood Bending", "Mist Walking"],
    answerIndex: 2
    },
    {title: "Korra is the first Avatar from the Water Tribes since:",
    choices: ["Kuruk", "Katara", "Kyoshi", "Mako"],
    answerIndex: 0
    },
    {title: "The United Republic was a nation formed out of:",
    choices: ["Fire Nation Colonies", "New Air Nomads", "Earth Colonies", "The Water Tribes"],
    answerIndex: 0
    },
    {title: "The Avatar draws their power from which spirit?",
    choices: ["Vaatu", "Raava", "Yangchen", "Szeto"],
    answerIndex: 1
    }
    ]
    //=================================================================================
    //Function that starts the quiz----------------------------------------------------
function startGame() {
    timerCount = 80;
    questionCount = 8;
    startButton.disabled = true;
    startTimer()
  }
    // Sets timer
    function startTimer() {
        timer = setInterval(function() {
          timerCount--;
          timerElement.textContent = timerCount;
          // Tests if time has run out
          if (timerCount <= 0) {
            // Clears interval
            clearInterval(timer);
            endGame();
          }
        }, 1000);
      }
    //==================================================================================      
    //This function will show the quiz question and answers-----------------------------
      function revealQuiz() {
          //Hide Start Button
        var hide = document.getElementById("start-button");
            hide.style.display = "none";
          //==================
        //Show Quiz
        document.getElementById("hide-this").style.display="block";
        document.getElementById("hiddenquestion").style.display = "block";
        document.getElementById("answer0").style.display = "block";
        document.getElementById("answer1").style.display = "block";
        document.getElementById("answer2").style.display = "block";
        document.getElementById("answer3").style.display = "block";
        document.getElementById('hiddenquestion').textContent=questions[0].title;
        document.getElementById('answer0').textContent=questions[0].choices[0];
        document.getElementById('answer1').textContent=questions[0].choices[1];
        document.getElementById('answer2').textContent=questions[0].choices[2];
        document.getElementById('answer3').textContent=questions[0].choices[3];
      }
    //================================================================================
    //This function will which answer was selected and write the next question--------
      function answer(event) {
        if (questionCount>0){
        questionCount-=1}
        questionNumber++
        questionElement.textContent = questionCount;
      //Checking to see which answser was clicked
        if(event.target==answer00)
        {selectedAnswer=0}
        else if(event.target==answer01)
        {selectedAnswer=1}
        else if(event.target==answer02)
        {selectedAnswer=2}
        if(event.target==answer03)
        {selectedAnswer=3}
      //Writes the next question and answers
        if (questionCount>=1){
               document.getElementById('hiddenquestion').textContent=questions[questionNumber].title;
               document.getElementById('answer0').textContent=questions[questionNumber].choices[0];
               document.getElementById('answer1').textContent=questions[questionNumber].choices[1];
               document.getElementById('answer2').textContent=questions[questionNumber].choices[2];
               document.getElementById('answer3').textContent=questions[questionNumber].choices[3];
                }
        if (selectedAnswer!==questions[questionNumber-1].answerIndex){
                timerCount -= 15;
                 timerElement.textContent = timerCount;
                }
        if (questionCount == 0) {
             clearInterval(timer);
             endGame();}
      }
     //============================================================================== 
     //End Game Function-------------------------------------------------------------
     //This will hide the quiz and leave behind the timer as well as revealing a form to enter initials
      function endGame() {
        document.getElementById("hiddenquestion").style.display = "none";
        document.getElementById("answer0").style.display = "none";
        document.getElementById("answer1").style.display = "none";
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";
        document.getElementById("hide-this").style.display="none";
        hidden = document.getElementById("hidden-form");
        hidden.style.display = "block";
      }
    //====================================================================================
    //Event Listeners---------------------------------------------------------------------
      answer00.addEventListener("click", answer);
      answer01.addEventListener("click", answer);
      answer02.addEventListener("click", answer);
      answer03.addEventListener("click", answer);
      startButton.addEventListener("click", startGame);
      startButton.addEventListener("click", revealQuiz);
    //===================================================================================