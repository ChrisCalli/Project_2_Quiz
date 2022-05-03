// JavaScript Document

	"use strict";

//---------------------------< DECLARATIONS >-------------------------------

// Global variables.

	var currentPosition = 0;

// Set the constants.

	const choiceButton1 = document.getElementById("choiceButton1");
	const choiceButton2 = document.getElementById("choiceButton2");
	const startButton = document.getElementById("startQuizButton");
	const howToButton = document.getElementById("howToButton");

	const questionLabel = document.getElementById("questionNumberLabel");
	const questionText = document.getElementById("questionText");

	const startLabel = "";
	const startText = "Please press start to begin.";
	
	const question1 = "How many RGB colors are there?";
	const question2 = "What was the password for U.S. nuclear missiles for an 8 year period?";
	const question3 = "What is the longest word you can type using one row of a keyboard?";
	const question4 = "How much did the first 1GB hard drive weigh?";
	const question5 = "What was the first computer mouse made out of?";

	const answer1 = "There are 256 x 256 x 256 = 16,777,216 RGB colors.";
	const answer2 = "The password for the computer controls of nuclear tipped missiles of the U.S was 00000000 for eight years.";
	const answer3 = "TYPEWRITER is the longest word that you can write using the letters only on one row of the keyboard of your computer.";
	const answer4 = "The first 1GB hard disk drive was announced in 1980 which weighed about 550 pounds, and had a price tag of $40, 000.";
	const answer5 = "Doug Engelbart invented the first computer mouse in around 1964 which was made of wood.";

	var results = 0;

//-------------------------------------< SCRIPT START >--------------------------

// This calls the startup function to setup the page. 

	pageSetup();

//------------------------------------< FUNCTIONS >----------------------------

	function pageSetup() {
		
		startButton.style.display = "block";

		questionLabel.style.display = "block";
		questionLabel.innerHTML = startLabel;

		questionText.style.display ="block";
		questionText.innerHTML = startText;

	}

	function moveQuiz(choice) {
		switch (currentPosition) {
			case 0:
				questionLabel.innerHTML = "Question 1:";
				questionText.innerHTML = question1;
				startButton.style.display = "none";

				choiceButton1.style.display = "inline-block";
				choiceButton1.innerHTML = "16,777";

				choiceButton2.style.display = "inline-block";
				choiceButton2.innerHTML = "16,777,216";

				currentPosition++;

				break;
			case 1:
				questionLabel.innerHTML = "Question 2:";
				questionText.innerHTML = question2;
				startButton.style.display = "none";

				choiceButton1.style.display = "inline-block";
				choiceButton1.innerHTML = "00000000";

				choiceButton2.style.display = "inline-block";
				choiceButton2.innerHTML = "Death";

				if (choice == "B") {
					results++;
					alert("Correct: " + answer1);
				};

				currentPosition++;

			break;
			case 2:
				questionLabel.innerHTML = "Question 3:";
				questionText.innerHTML = question3;
				startButton.style.display = "none";

				choiceButton1.style.display = "inline-block";
				choiceButton1.innerHTML = "Confuscius";

				choiceButton2.style.display = "inline-block";
				choiceButton2.innerHTML = "Typewriter";

				if (choice == "A") {
					results++;
					alert("Correct: " + answer2);
				};

				currentPosition++;

			break;
			case 3:
				questionLabel.innerHTML = "Question 4:";
				questionText.innerHTML = question4;
				startButton.style.display = "none";

				choiceButton1.style.display = "inline-block";
				choiceButton1.innerHTML = "550 pounds";

				choiceButton2.style.display = "inline-block";
				choiceButton2.innerHTML = "16 pounds";

				if (choice == "B") {
					results++;
					alert("Correct: " + answer3);
				};

				currentPosition++;

			break;
			case 4:
				questionLabel.innerHTML = "Question 5:";
				questionText.innerHTML = question5;
				startButton.style.display = "none";

				choiceButton1.style.display = "inline-block";
				choiceButton1.innerHTML = "Metal";

				choiceButton2.style.display = "inline-block";
				choiceButton2.innerHTML = "Wood";

				if (choice == "A") {
					results++;
					alert("Correct: " + answer4);
				};

				currentPosition++;
			break;
			case 5:
				if (choice == "B") {
					results++;
					alert("Correct: " + answer5);
				};
				questionLabel.innerHTML = "Results: ";
				questionText.innerHTML = results + " Correct!";
				startButton.style.display = "block";
				startButton.innerHTML = "Start again";
				choiceButton1.style.display = "none";
				choiceButton2.style.display = "none";

				

				currentPosition = 0;
				results = 0;

				break;
			default:
				break;
		}	
	}

//-------------------------------< EVENT LISTENERS >--------------------------


// Show the how to page when clicking the help button in the top right corner.

	howToButton.addEventListener("click", function(e) {

		window.open("howTo.html", "_blank");

	});

	startButton.addEventListener("click", function(e) {
		moveQuiz();
	});
	choiceButton1.addEventListener("click", function(e) {
		moveQuiz("A");
	});
	choiceButton2.addEventListener("click", function(e) {
		moveQuiz("B");
	});

// --------------------------------------------------------------
