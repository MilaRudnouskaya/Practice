// Who is last out
// You have X number of people.  Every other person is removed from the game.  Who is last standing?
// prompt user for the number of users and they output the ‘name’ of the user which is last standing.


class lastMan {

	constructor() {
		this.players = [];
		this.number = 0;
	}

	start() {
		this.getNumberOfPlayers(); // ask how many ppl playing
		this.createListOfPlayers(); // create an array of those ppl
		this.printRemainingPlayers(); // print the list of ppl
	
		// this.killOne();
		// this.killOne();
		// this.killOne();
		// this.killOne();
		// this.killOne();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();
		// this.getVictim();

		this.killEmAll(); // do the loops of (killing + print remaining) until one left; print out the last one
	}

	getNumberOfPlayers() {
		this.number = Number(prompt('how many peeps are playing?'));
		return this.number;
	}

	createListOfPlayers() {
		this.players = Array.from({length: this.number}, () => Math.floor(Math.random() * 1000)); 
		return this.players
	}

	printRemainingPlayers() {
		if (this.players.length>1) {
			for(var i=0;i<this.players.length;i++){
				document.write('Dude #' + (i+1) + ' of ' + this.players.length + "; name: " + this.players[i] + '<br/>'); 
			}
		}
		else {
			document.write('Winner is ' + this.players[0]);
		}
		
	}

	getVictim() {
		this.victimIndex = Math.floor(Math.random() * (this.number));
		this.victimName = this.players[this.victimIndex];
		return document.write('Executed -  ' + this.victimIndex + "; name: " + this.victimName + '<br/>');
	}

	killOne() {
		this.getVictim();
		this.players.splice(this.victimIndex, 1);
	}

	killEmAll() {
		for(var i=0;i<this.players.length-1;i++){
			document.write('round ' + (i+1) + '<br/>');
			this.killOne();
			this.printRemainingPlayers();

			}
			// this.number=this.number-1;
	}
}


var lastMan1 = new lastMan();
lastMan1.start();