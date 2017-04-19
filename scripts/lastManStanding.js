// Who is last out
// You have X number of people.  Each round a random person is removed from the game.  Who is last standing?



class lastMan {

	constructor() {
		this.players = [];
		this.number = 0;
	}

	start() {
		this.getNumberOfPlayers(); // ask how many ppl playing
		this.createListOfPlayers(); // create an array of those ppl
		this.printPlayers(); // print the list of ppl
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

	printPlayers() {
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
		this.victimIndex = Math.floor(Math.random() * (this.players.length));
		this.victimName = this.players[this.victimIndex];
		return document.write('Executed - #' + (this.victimIndex + 1) + "; name: " + this.victimName + '<br/>' + '<br/>');
	}

	killEmAll() {
		for(var i=0;i<this.number-1;i++){
			document.write('<br/>' + 'round ' + (i+1) + '<br/>');
			this.getVictim();
			this.players.splice(this.victimIndex, 1);
			this.printPlayers();
			}
	}
}


var lastMan1 = new lastMan();
lastMan1.start();