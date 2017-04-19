
// Pseudo Code:

// - promo the user to: list, put in money (possibly handle the exception of a user select w/o paying)
// - take money until it’s $1 otherwise keep asking for money (handle the exception)
// - $1 is reached: prompt user to choose item
// - handle exception for an item that doesn’t exist or they fat fingered it or vend





// ---
var rows = [1, 2, 3, 4, 5];
var cols = ["a", "b", "c", "d", "e"];


// ---


var p = {
	'1_1': 'coke',
	'1_2': 'fanta',
	'2_1': 'pepsi',
	'2_2': 'sprite',
}

var products = [
["coke", 2, 3, 4, 5],
[6, 7, "jimmy", 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]
];

// var grid = [ for (r of rows) [ for (c of cols) r+c ] ];
// console.log(grid[0][0])

function x_listItems() {
		// console.log('x_listItems', j);
			var row = [1, 2];
			console.log(row.join(' '));

			// for (var h = 0; h < 2; h++) {
			// 	console.log()
			// }
	 		for(j=0; j < 2; j++){
	 			var col = [cols[j] + '|'];
				for(i=0; i < 2; i++){
					col.push(p[(j+1) + '_' + (i+1)]);
					// row.push(rows[j] + ',' + cols[i])
					// console.log("x:",j, i);
					// document.write(products[j][i]);
					// document.write("<br>");
	 			}
	 			console.log(col.join(' '));
			}
		}

x_listItems();

// var products = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
// function x_listItems() {
// 		// console.log('x_listItems', j);
// 	 		for(j=0; j<=4; j++){
// 				for(i=0; i<=4; i++){
// 					// console.log("x:",j, i);
// 					// document.write(products[j][i]);
// 					// document.write("<br>");
// 	 			}
// 			}
// 		}

// x_listItems();


// ---


// // hello. select what do you want to do 
// // 1. list
// // 2. insertMoney
// // 3. selectItem

// ---

// add: listing code and price for each product
// select item takes an argument
// when approved - print "here is your item" + item name


var price = 100;
var currentAmount = 0;
var products = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];




var setTimeout = function(fn) {
	fn.call(window);
}


class vendingMachine {

	// entry point function - calls all the methods in flow
	start() {
		this.listItems();
		console.log('this', this);

		// setTimeout(this.selectAction.bind(this), 3000);

		// // setTimeout(() => this.selectAction(), 3000);


		// // var _this = this;
		// setTimeout(function() {
		// 	_this.selectAction();
		// }, 3000);

		setTimeout(() => this.selectAction(), 3000);
	}

	// all other methods
	selectAction() {
		var action = prompt("Type a number to select an action:\n1. Insert money\n2. Select an item");
		switch(action) {
	    case "1":
	        this.insertMoney();
	        break;
	    case "2":
	        this.selectItem();
	        break;
	    default:
	        alert("invalid selection");
	    }
	}

	listItems() {
 		document.write("Hi, here is the today's selection:");
 		document.write("<br>");
 		for(var j=0; j<=4; j++){
			for(var i=0; i<=4; i++){
				document.write(products[j][i]);
				document.write("<br>");
 			}
		}
	}

	getDiff() {
    	return price - currentAmount;
	}

	approveVend() {
 		var approve = false;
 		if (this.getDiff() <= 0) {
 			approve = true;
 		}
 		return approve;
 	}

 	insertMoney() {
 		var input = Number(prompt("give me money"));
		currentAmount = currentAmount + input;
		this.getDiff();
		// this.selectAction()
		return this.selectAction();
	}


	selectItem() {
   		if (this.approveVend() === true) {
   			alert("here is your item");
   			// currentAmount = 0;
   		}
   		else {
   			alert("ain't you trying to be smart? add " + this.getDiff());
   			this.insertMoney();
   		}
   	}

}


var vendingMachine1 = new vendingMachine(); // new instance - instantiate an object

function doYouEvenVendBro() {
	console.log(vendingMachine1.start()); // call a method of that object

}


// doYouEvenVendBro();


class X {

	constructor() {
		this.propA = 'proprety a';
	}
	

	test() {
		console.log('this is', this);
		this.print();
	}

	print() {
		console.log('x.test got called motherfucker');
	}

}

var a = new X();

// a.do();


function invoke(fn) {
	// fn();
	// fn.call(fn);
}

function test() {
	console.trace('test got called motherfucker');
}

// test();

// invoke(test);

// invoke(a.do)

// a.test();

// invoke(a.test);

// invoke(function() {
// 	a.test();
// });


// var fn = function() {
// 	this.x();
// 	// console.log('asdasd');
// }


// fn.call({x: function() {console.log('hi Im x')}})


doYouEvenVendBro();




