
$(document).ready(function() {

	// Random number generator with range of two numbers
	
	function getValue(max, min) {
	    var x = Math.floor((Math.random() * max) + min);
	    return x;
	}

	// Define variables

	var wins = 0;

	var losses = 0;

	// Variables that reset each play

	var score = 0;

	var computerNumber = 0;

	var crystal1 = 0;

	var crystal2 = 0;

	var crystal3 = 0;

	var crystal4 = 0;

	// function to reset values

	function resetValues() {

		score = 0;
		$("#score").text(score);

		computerNumber = getValue(101,19);
		$("#randomNumber").text(computerNumber);
		console.log("Match this number:" + computerNumber);

		crystal1 = getValue(12,1);
		console.log("Crystal 1:" + crystal1);

		crystal2 = getValue(12,1);
		console.log("Crystal 2:" + crystal2);

		crystal3 = getValue(12,1);
		console.log("Crystal 3:" + crystal3);

		crystal4 = getValue(12,1);
		console.log("Crystal 4:" + crystal4);

	}

	// Do it!

	resetValues();

	// Add value to score and compare

	function hitMe(x) {

		score += x;

		$("#score").text(score);

		if (score > computerNumber) {

			losses++;

			$("#losses").text(losses);

			alert("You've lost.  Try again.");

			resetValues();

		} else if (score == computerNumber) {

			wins++;

			$("#wins").text(wins);

			alert("You've won! Play again.");

			resetValues();

		}


	}

	// Crystal clicking that adds to score

	// Crystal 1

	$("#crystal1").on("click", function() {

		// Trigger

		console.log("You've clicked crystal1 with a value of " + crystal1);

		hitMe(crystal1);

	})

	// Crystal 2

	$("#crystal2").on("click", function() {

		// Trigger

		console.log("You've clicked crystal1 with a value of " + crystal2);

		hitMe(crystal2);

	})

	// Crystal 1

	$("#crystal3").on("click", function() {

		// Trigger

		console.log("You've clicked crystal1 with a value of " + crystal3);

		hitMe(crystal3);

	})

	// Crystal 1

	$("#crystal4").on("click", function() {

		// Trigger

		console.log("You've clicked crystal1 with a value of " + crystal4);

		hitMe(crystal4);

	})

})