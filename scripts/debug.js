
var currentAmount = 0

function start() {

    const acc = confirm("Do you want to add money?");
    if (acc) {
        insertMoney();
    }
    else {
   		alert("make a selection")
    }
}

function insertMoney() {

	currentAmount = currentAmount + Number(prompt('how much are you adding'));
	console.log(currentAmount);
	start();


	// return getDiff()
}