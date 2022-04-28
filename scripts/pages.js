
//---------------------------< DECLARATIONS >-------------------------------

// JavaScript Document

	"use strict";

// Global variables.

	

	document.body.style.boxSizing = "border-box";
	document.body.style.background = "#f1f1f1";
	document.body.style.fontFamily = "Arial";
	//document.body.style.padding = "0px";
	document.body.style.margin = "0px";


//-------------------------------------< SCRIPT START >--------------------------

	createPage("quizz2");

function createPage(pageName) {
	
	switch(pageName) {
			
		case "quizz1":
			break;
		
		case "quizz2":
				
				studioLightMode("red");
		break;
			
		default:
		break;
	}
}


//------------------------------------< CREATE STUDIO >----------------------------

function studioLightMode(mode) {
	
	alert("hello");
}



//-------------------------------< EVENT LISTENERS >----------------------------------------------

document.body.addEventListener("click", function(event) {
	if(event.target.id == "range1") {
		rangeValueLabel.innerHTML = document.getElementById("range1").value;
	};
});

/*
	//This block is used for the drag object functions, for mouse and touch
document.getElementById("userPage").addEventListener("mousedown", mDown);
document.getElementById("userPage").addEventListener("mouseup", mUp);
document.getElementById("userPage").addEventListener("mousemove", mMove);
document.getElementById("userPage").addEventListener("touchstart", mDown);
document.getElementById("userPage").addEventListener("touchend", mUp);
document.getElementById("userPage").addEventListener("touchmove", mMove);
*/
