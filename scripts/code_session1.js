
function  sleepIn(weekday, vacation) {
	var sleepin = false;
	if (!weekday || vacation) {
		console.log ("sleep day")
		sleepin = true
	}
		return sleepin
	}
}

sleepIn()


// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
// We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false


function monkeyTrouble(aSmile, bSmile) {
	var trouble = false;
	if ((aSmile & bSmile) || (!aSmile & !bSmile)) {
		console.log ("you're in trouble")
		trouble = true
	}
	else
		return trouble

}

    monkeyTrouble(aSmile, bSmile) {
        var mTrouble = false;
        if ((aSmile === bSmile))
            mTrouble = true
        return mTrouble



// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0



function diff21 (n) {
	if (n<=21) {
		console.log(Math.abs(21-n))
	}
	else {
		console.log(2*Math.abs(21-n))
	}
}

  diff21(n) {
        var diff = Math.abs(21 - n)
        if (n > 21)
            diff = diff * 2
        return diff
    }

// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

function nearHundred(n) {
	nearHundred=false
	if (Math.abs(100-n)<=10 || Math.abs(200-n)<=10){
		nearHundred = true
	}
	return nearHundred

}

// Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
//The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// missingChar("kitten", 1) → "ktten"
// missingChar("kitten", 0) → "itten"
// missingChar("kitten", 4) → "kittn"


function missingChar (n, str) {
	console.log(str.slice(0, n) + str.slice(n+1, str.length))
}







