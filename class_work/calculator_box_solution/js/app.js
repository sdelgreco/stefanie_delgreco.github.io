var total = 0;

// +10

var plusTen = document.querySelector("#a10");
							$("#a10").val(plusTen)

plusTen.onclick = addTen;

function addTen() {
	total = total + 10;

	document.querySelector("#out").innerHTML = total;
}

// +20

var plusTwenty = document.querySelector("#a20");
									$("#a20").val(plusTwenty)

plusTwenty.onclick = addTwenty;

function addTwenty() {
	total = total + 20;

	document.querySelector("#out").innerHTML = total;
}

// +30

var plusThirtyButton = document.querySelector("#a30");

plusThirtyButton.onclick = addThirty;

function addThirty() {
	total = total + 30;

	document.querySelector("#out").innerHTML = total;
}

// -10

var minusTenButton = document.querySelector("#n10");

minusTenButton.onclick = subtractTen;

function subtractTen() {
	total = total - 10;

	document.querySelector("#out").innerHTML = total;
}


// -20

var minusTwentyButton = document.querySelector("#n20");

minusTwentyButton.onclick = subtractTwenty;

function subtractTwenty() {
	total = total - 20;

	document.querySelector("#out").innerHTML = total;
}

// -30

var minusThirtyButton = document.querySelector("#n30");

minusThirtyButton.onclick = subtractThirty;

function subtractThirty() {
	total = total - 30;

	document.querySelector("#out").innerHTML = total;
}

// red

var redButton = document.querySelector("#red");

redButton.onclick = turnRed;

function turnRed() {
	document.querySelector("#out").style.background = "red";
}

// blue

var blueButton = document.querySelector("#blue");

blueButton.onclick = turnBlue;

function turnBlue() {
	document.querySelector("#out").style.background = "blue";
}

// reset

var outputButton = document.querySelector("#out");

outputButton.onclick = reset;

function reset() {
	total = 0;

	document.querySelector("#out").innerHTML = total;
	document.querySelector("#out").style.background = "white";
}
