// Who is last out
// You have X number of people.  Every other person is removed from the game.  Who is last standing?
// prompt user for the number of users and they output the ‘name’ of the user which is last standing.

// var number = 0;




class lastMan {

	constructor() {
		this.players = [];
	}

	start() {
		// ask how many ppl playing
		// create an array of those ppl
		// do the loops of (killing + print remaining) until one left 
		// print out the last one

		// this.getNumberOfPlayers();
		this.createListOfPlayers();
		// this.killEmAll();
	}

	getNumberOfPlayers() {
		var number = Number(prompt('how many peeps are playing?'));
		return number;
	}


	// players = Array.from({length: number}, () => Math.floor(Math.random() * 100));

	createListOfPlayers() {
		// var players = Array.from({length: number}, () => Math.floor(Math.random() * 100));
		this.getNumberOfPlayers();
		this.players = Array.from({length: number}, () => Math.floor(Math.random() * 100));
		for(var i=0;i<players.length;i++){
			document.write('Dude #' + (i+1) + ' of ' + players.length + "; name: " + players[i] + '<br/>'); 
		}
	}

	killEmAll() {
		for(var i=0;i<number;i++){
			document.write('round ' + (i+1) + '<br/>');
			players.splice( Math.floor(Math.random() * (number-1)), 1 );
			number = number -1;
		// 	document.write('Dude #' + (i+1) + ' of ' + players.length + "; name: " + players[i] + '<br/>'); 


		// for(var i=0;i<players.length;i++){
		// 	document.write('Dude #' + (i+1) + ' of ' + players.length + "; name: " + players[i] + '<br/>'); 
		}
	}

	// return {
	// 	players: createListOfPlayers;

	// }



}



var lastMan1 = new lastMan();
lastMan1.start();