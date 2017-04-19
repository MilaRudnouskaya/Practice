
// Pseudo Code:

// - promo the user to: list, put in money (possibly handle the exception of a user select w/o paying)
// - take money until it’s $1 otherwise keep asking for money (handle the exception)
// - $1 is reached: prompt user to choose item
// - handle exception for an item that doesn’t exist or they fat fingered it or vend


// ---

// add: listing code and price for each product
// select item takes an argument
// when approved - print "here is your item" + item name


var price = 100;
var currentAmount = 0;
var products = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];


class vendingMachine {

	start() {
		this.listItems();
		setTimeout(() => this.selectAction(), 3000);
	}

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

doYouEvenVendBro();




