// class car - will create instances of a car - all diff
// class lane 
// object frog
// object gate



// instance of car (arguments) // creates a new car
// var car = document.createElement('div');


class car {
	constructor (carWidth, carHeight, carColor, carPosition) {
		var carDiv = document.createElement('div')
		carDiv.style.width = carWidth + "px";
		carDiv.style.height = carHeight + "px";
		carDiv.style.backgroundColor = carColor ;
		// carDiv.style.position = carPosition;

		document.body.appendChild(carDiv);
	}
}

var car1 = new car(100, 300, "#88aaff", "absolute");
var car2 = new car(500, 300, "#88bbff", "absolute");
var car3 = new car(500, 300, "#88ccff", "absolute");


// someDiv.style.width = width1 + "px";
// someDiv.style.height = height1 + "px";
// someDiv.style.backgroundColor = "#123456";
// someDiv.style.position = "absolute";



