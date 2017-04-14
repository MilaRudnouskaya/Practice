
// Pseudo Code:

// - promo the user to: list, put in money (possibly handle the exception of a user select w/o paying)
// - take money until it’s $1 otherwise keep asking for money (handle the exception)
// - $1 is reached: prompt user to choose item
// - handle exception for an item that doesn’t exist or they fat fingered it or vend





// ---
// var rows = [1, 2, 3, 4, 5];
// var cols = ["a", "b", "c", "d"];

// var grid = [ for (r of rows) [ for (c of cols) r+c ] ];
// console.log(grid[0][0])

// ---

var products = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
function x_listItems() {
		// console.log('x_listItems', j);
	 		for(j=0; j<=4; j++){
				for(i=0; i<=4; i++){
					// console.log("x:",j, i);
					// document.write(products[j][i]);
					// document.write("<br>");
	 			}
			}
		}

x_listItems();

// ---


// // hello. select what do you want to do 
// // 1. list
// // 2. insertMoney
// // 3. selectItem

// ---

var price = 100;
var currentAmount = 0;
var products = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];


class vendingMachine {

	// entry point function - calls all the methods in flow
	start() {
		this.listItems();
		this.selectAction();
	}

	// all other methods
	selectAction() {
		var action = prompt("Type a number to select an action: 1.Insert money, 2.Select an item");
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

	getDiff() {
    	return price - currentAmount;
	}

	approveVend() {
 		var approve = false;
 		if (this.getDiff() <= 0) {
 			approve = true;
 			// cuurentAmount = 0;
 		}
 		return approve;
 	}

 	listItems() {
 		console.log("asd");
 		document.write("Hi, here is the today's selection:");
 		document.write("<br>");
 		// var j=0;
 		// var i=0;
 		for(var j=0; j<=4; j++){
			for(var i=0; i<=4; i++){
				document.write(products[j][i]);
				document.write("<br>");
 			}
		}
	}

 	insertMoney() {
 		var input = Number(prompt("give me money"));
		currentAmount = currentAmount + input;
		this.getDiff();
		return this.selectAction();
	}


	selectItem() {
   		if (this.approveVend() === true) {
   			alert("here is your item");
   		}
   		else {
   			alert("ain't you trying to be smart? add " + this.getDiff());
   		}
   		return this.selectAction();
   	}

}


var vendingMachine1 = new vendingMachine(); // new instance - instantiate an object

function doYouEvenVendBro() {
	console.log(vendingMachine1.start()); // call a method of that object

}

doYouEvenVendBro();



