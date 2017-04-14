//Vending machine
//$1 per item, 25 items

// list what's in the vending machine
// choose
// cancel
// pay
// item is vended


// Pseudo Code:

// - promo the user to: list, put in money (possibly handle the exception of a user select w/o paying)
// - take money until it’s $1 otherwise keep asking for money (handle the exception)
// - $1 is reached: prompt user to choose item
// - handle exception for an item that doesn’t exist or they fat fingered it or vend


var price = 100;
var currentAmount = 0;
var mystuff =   [1,2,3,4,5],
              

function getDiff() {
    return price - currentAmount;
}

function approveVend() {
 	var approve = false;
 	if (getDiff() <= 0) {
 		approve = true;
 	}
 	return approve;
 }

function insertMoney(input) {
   currentAmount = currentAmount + input;
   return getDiff()
}


function selectItem() {
   if (approveVend() === true) {
   		alert("here is your item");
   }
   else 
   		alert("ain't you trying to be smart? add " + getDiff());
 }



 






// //ask for money and count
// function countAmount() {
//     var input = Number(prompt("Please insert money! (currently " + currentAmount + ")"));

//     return currentAmount + input;
// }

// function getDiff() {
//     return price - currentAmount;
// }

// // on selection of an item try to Vend

// function approveVend() {

//     console.log('price', price);
//     console.log('current amount', currentAmount)

//     while (getDiff() > 0) {
//         countAmount()
//     }

//     alert("Here is your item");


// }

// function insertMoney() {
//     countAmount()

//     const acc = confirm("You currently have " + currentAmount + " in! Do you want to add more?");

//     if (acc) {
//         insertMoney()
//     }
// }

// function start() {
//     insertMoney();

//     const acc = confirm("Do you want to buy something?")

//     if (acc) {
//         approveVend();
//     }
// }

// start();







    // if not enough money show how much remains and prompt to get more money and count again
    // if (diff > 0) {
    //     alert(diff + " remains");
    //     return countAmount()
    // }
    // else{
    //     return alert("Here is your item");
    //     currentAmount = 0
    // }