// class car - will create instances of a car - all diff
// class lane 
// object frog
// object gate




var gameWindow = document.createElement('div')
Object.assign(gameWindow.style, {
    width: "400px",
    height: "200px",
    backgroundColor: "#E1EEF9",
    position: "absolute",
    left: "400px"
})
document.body.appendChild(gameWindow);



class car {
	constructor (carWidth, carLeft, carTop, carColor) {
		var carDiv = document.createElement('div')
		carDiv.style.position = "absolute";
		carDiv.style.height = "10px";
		carDiv.style.width = carWidth + "px";
		carDiv.style.left = carLeft + "px";
		carDiv.style.top= carTop + "px";
		carDiv.style.backgroundColor = carColor ;
		carDiv.id = 'carId';

		gameWindow.appendChild(carDiv);
	}
	
}

var car1 = new car(10, 0, 100, "red");

// $(document).ready(function(){
//     $('#someId').animate({left: '250px'});
// });

// var car2 = new car(50, 70, 40, "yellow");
// var car3 = new car(40, 50, 60, "red");



// $(document).ready(function(){
//     $('div').animate({left: '250px'});
// });



// class lane {
// 	constructor (laneTop) {
// 		var laneDiv = document.createElement('div')
// 		laneDiv.style.position = "absolute";
// 		laneDiv.style.height = "20px";
// 		laneDiv.style.width = "400px";
// 		// laneDiv.style.left = "400px";
// 		laneDiv.style.top= laneTop + "px";
// 		laneDiv.style.border = "solid #000000";

// 		gameWindow.appendChild(laneDiv);
// 	}
// }

// var lane1 = new lane(30);

class frog {
	constructor () {
		var frogDiv = document.createElement('div')
		frogDiv.style.position = "absolute";
		frogDiv.style.height = "50px";
		frogDiv.style.width = "50px";
		frogDiv.style.left = "0px";
		frogDiv.style.top= "20px";
		frogDiv.style.backgroundColor = "green" ;
		frogDiv.id = "frogId"

		gameWindow.appendChild(frogDiv);
	}
}

var froggy = new frog();


// function collision($carId, $frogId) {
//       var x1 = $carId.offset().left;
//       var y1 = $carId.offset().top;
//       var h1 = $carId.outerHeight(true);
//       var w1 = $carId.outerWidth(true);
//       var b1 = y1 + h1;
//       var r1 = x1 + w1;
//       var x2 = $frogId.offset().left;
//       var y2 = $frogId.offset().top;
//       var h2 = $frogId.outerHeight(true);
//       var w2 = $frogId.outerWidth(true);
//       var b2 = y2 + h2;
//       var r2 = x2 + w2;
        
//       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//       return true;
//     }

// collision();

// window.setInterval(function() {
//     $('#result').text(collision($('#div1'), $('#div2')));
// }, 200);


// $('#carId', '#frogId').draggable();

// $( function() {
//     $( '#carId', '#frogId').draggable();
//   } );

function collision($carId, $frogId) {
	var carX1 = $carId.position().left;
	var carX2 = carX1 + $carId.width();

	var frogX1 = $frogId.position().left;
	var frogX2 = frogX1 + $frogId.width();
	
	var overlap = !(carX2 < frogX1 || carX1 > frogX2);
	return overlap
}

function animateCar($car, direction) {
	$car.animate({
		left: (100 * direction) + '%'
	}, 1000, () => {
		const nextDrection = direction > 0 ? -1 : 1;
		console.log('done', nextDrection);
		animateCar($car, nextDrection);
		// animateCar
	});
}


// animateCar($('#carId'), 1);
console.log("colliding?", collision($('#carId'), $('#frogId')));




// function sum(a, b) {
// 	return a + b;
// }

// sum(2, 4)


// var overlap = !(rect1.right < rect2.left || 
//                 rect1.left > rect2.right);



