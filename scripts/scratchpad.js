


var setTimeout = function(fn) {
	fn.call(window);
}


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

// setTimeout(this.selectAction.bind(this), 3000);

