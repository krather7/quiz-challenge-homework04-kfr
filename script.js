    //Initial query selector variables---------------------------------------------------
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".question-count");
var startButton = document.querySelector("#start-button");
var answer00 = document.querySelector("#answer0");
var answer01 = document.querySelector("#answer1");
var answer02 = document.querySelector("#answer2");
var answer03 = document.querySelector("#answer3");
var submitInitials = document.querySelector("#submit");
    //==================================================================================

    //Displays answers in console for those
    console.log("Answers: 1:Air Nomads||2:Roku||3:Lava Bending||4:Levitation||5:Blood Bending||6:Kuruk||7:Fire Nation Colonies||8:Raava")
    //==================================================================================


    //Local Storage Function that is called when the user clicks Submit-----------------
initialsInput=document.querySelector("#initials");
submitInitials.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;

    var scoringObject = {initials: initials, score: timerCount}
    localStorage.setItem("scoringObject", JSON.stringify(scoringObject))

    if (initials.length>=4 || initials == ""){
        console.log("Enter initials plzz!")
        alert("Initials must be three characters or less!")
        return
    } else {
        window.location = 'highscore.html';
    }


  });
    //==================================================================================



    //Declaring Global Variables------------------------------------------------------
var timer;
var timerCount;
var questionNumber = 0;
var allQuestionsAnswered = false;
    //==================================================================================


    //Quiz Object with  questions and answers-------------------------------------------
var questions = [
    {title: "Avatar Aang is from which nation?",
    choices: ["Air Nomads", "Water Tribes", "Earth Kingdom", "Fire Nation"],
    answerIndex: 0
    },
    {title: "Who was the avatar before Aang?",
    choices: ["Kyosi", "Roku", "Korra", "Yangchen"],
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
    },
    ]
    //==================================================================================  


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
          if (timerCount >= 0) {
            if (questionCount == 0) {
                // Clears interval
                clearInterval(timer);
                endGame();}
            // Tests if win condition is met
            if (timerCount === 0) {
                if (questionCount == 0) {
                    // Clears interval
                    clearInterval(timer);
                    endGame();}
              // Clears interval and stops timer
              clearInterval(timer);
            }
          }
          // Tests if time has run out
          if (timerCount <= 0) {
            if (questionCount == 0) {
                // Clears interval
                clearInterval(timer);
                endGame();}
            // Clears interval
            clearInterval(timer);
            endGame();
          }
        }, 1000);
      }

    //==================================================================================      

    //This function will show the quiz question and answers-----------------------------
      function revealQuiz() {
        var hiddenScoreBox = document.getElementById("hide-this");
        hiddenScoreBox.style.display="block";
        var hiddenStartbutton = document.getElementById("start-button");
        hiddenStartbutton.style.display = "none";
        var hiddenQuestion = document.getElementById("hiddenquestion");
            hiddenQuestion.style.display = "block";
                 document.getElementById('hiddenquestion').textContent=questions[0].title;
         var hiddenAnswers = document.getElementById("answer0");
            hiddenAnswers.style.display = "block";
                 document.getElementById('answer0').textContent=questions[0].choices[0];
         hiddenAnswersWrong = document.getElementById("answer1");
            hiddenAnswersWrong.style.display = "block";
                 document.getElementById('answer1').textContent=questions[0].choices[1];
         hiddenAnswersWrong = document.getElementById("answer2");
            hiddenAnswersWrong.style.display = "block";
                document.getElementById('answer2').textContent=questions[0].choices[2];
        hiddenAnswersWrong = document.getElementById("answer3");
            hiddenAnswersWrong.style.display = "block";
                 document.getElementById('answer3').textContent=questions[0].choices[3];

      }
    //================================================================================



    //This function will check if the first answer was selected---------------------
      function answer0() {
        if (questionCount>0){
        questionCount-=1}
        questionNumber++
        questionElement.textContent = questionCount;
        selectedAnswer=0
                //Writes the next question and answers
        document.getElementById('hiddenquestion').textContent=questions[questionNumber].title;
        document.getElementById('answer0').textContent=questions[questionNumber].choices[0];
        document.getElementById('answer1').textContent=questions[questionNumber].choices[1];
        document.getElementById('answer2').textContent=questions[questionNumber].choices[2];
        document.getElementById('answer3').textContent=questions[questionNumber].choices[3];
        if (selectedAnswer!==questions[questionNumber-1].answerIndex){
            timerCount -= 15;
        }
      }
     //============================================================================== 



     //This function will check if the second answer was selected---------------------
      function answer1() {
        if (questionCount>0){
            questionCount-=1}
        questionNumber++
        questionElement.textContent = questionCount;
        selectedAnswer=1
                //Writes the next question and answers
            document.getElementById('hiddenquestion').textContent=questions[questionNumber].title;
            document.getElementById('answer0').textContent=questions[questionNumber].choices[0];
            document.getElementById('answer1').textContent=questions[questionNumber].choices[1];
            document.getElementById('answer2').textContent=questions[questionNumber].choices[2];
            document.getElementById('answer3').textContent=questions[questionNumber].choices[3];
        //Reduces Timer when wrong answer is selected
        if (selectedAnswer!==questions[questionNumber-1].answerIndex){
            timerCount -= 15;
        }
      }
     //==================================================================================
     
    //This function will check if the third answer was selected---------------------
         function answer2() {
            if (questionCount>0){
                questionCount-=1}
            questionNumber++
            questionElement.textContent = questionCount;
            selectedAnswer=2
                    //Writes the next question and answers
                document.getElementById('hiddenquestion').textContent=questions[questionNumber].title;
                document.getElementById('answer0').textContent=questions[questionNumber].choices[0];
                document.getElementById('answer1').textContent=questions[questionNumber].choices[1];
                document.getElementById('answer2').textContent=questions[questionNumber].choices[2];
                document.getElementById('answer3').textContent=questions[questionNumber].choices[3];
            //Reduces Timer when wrong answer is selected
            if (selectedAnswer!==questions[questionNumber-1].answerIndex){
                timerCount -= 15;
            }
          }
    //==================================================================================   

         
    //This function will check if the fourth answer was selected---------------------
      function answer3() {
        if (questionCount>0){
            questionCount-=1}
        questionNumber++
        questionElement.textContent = questionCount;
        selectedAnswer=3
                //Writes the next question and answers
            document.getElementById('hiddenquestion').textContent=questions[questionNumber].title;
            document.getElementById('answer0').textContent=questions[questionNumber].choices[0];
            document.getElementById('answer1').textContent=questions[questionNumber].choices[1];
            document.getElementById('answer2').textContent=questions[questionNumber].choices[2];
            document.getElementById('answer3').textContent=questions[questionNumber].choices[3];
        //Reduces Timer when wrong answer is selected
        if (selectedAnswer!==questions[questionNumber-1].answerIndex){
            timerCount -= 15;
        }
      }
     //==================================================================================   



//End Game Function-------------------------------------------------------------------
      //This will hide the quiz and leave behind the timer as well as revealing a form to enter initials
      function endGame() {
        hiddenQuestion = document.getElementById("hiddenquestion");
            hiddenQuestion.style.display = "none";
         hiddenAnswers = document.getElementById("answer0");
            hiddenAnswers.style.display = "none";
        hiddenAnswersWrong = document.getElementById("answer1");
            hiddenAnswersWrong.style.display = "none";
        hiddenAnswersWrong = document.getElementById("answer2");
            hiddenAnswersWrong.style.display = "none";
         hiddenAnswersWrong = document.getElementById("answer3");
            hiddenAnswersWrong.style.display = "none";
        hidden = document.getElementById("hidden-form");
            hidden.style.display = "block";
      }
    //====================================================================================



    //Takes the user to the high scores page when submit is clicked-----------------------
      function submit(event) {
          event.preventDefault();
      }
    //====================================================================================


    //Event Listeners---------------------------------------------------------------------
      answer00.addEventListener("click", answer0);
      answer01.addEventListener("click", answer1);
      answer02.addEventListener("click", answer2);
      answer03.addEventListener("click", answer3);
      startButton.addEventListener("click", startGame);
      startButton.addEventListener("click", revealQuiz);
      submitInitials.addEventListener("click", submit);
    //===================================================================================
