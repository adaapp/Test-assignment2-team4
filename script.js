function poundsToDollars(amount) {
	if (isNaN(amount)) {
		throw new Error('Error: You havent entered a number');
	}
	if (amount < 0) {
		throw new Error('Error: Please Enter Valid currency');
	}
	let amountToString = amount + '';
	decimalPoint = amountToString.indexOf('.');
	numAfterPoint = amountToString.substring(decimalPoint);
	if (numAfterPoint.length > 3) {
		// use number '3' because includes decimal point
		throw new Error('Error: It should be 2 decimal places'); // if numAfterPoint is greater than 3 means there is more than 2 numbers after the decimal point, hence invalid currency
	}
	//Coverting from pounds to dollars
	return parseFloat((amount * 1.42).toFixed(2));
}

function dollarsToPounds(amount) {
	//Converting from Dollars to Pounds
	if (isNaN(amount)) {
		throw new Error('Error: You havent entered a number');
	}

	if (amount < 0) {
		throw new Error('Error: Please Enter Valid currency');
	}
	let amountToString = amount + '';
	decimalPoint = amountToString.indexOf('.');
	numAfterPoint = amountToString.substring(decimalPoint);
	if (numAfterPoint.length > 3) {
		// use number '3' because includes decimal point
		throw new Error('Error: It should be 2 decimal places'); // if numAfterPoint is greater than 3 means there is more than 2 numbers after the decimal point, hence invalid currency
	}
	//Coverting from pounds to dollars
	return parseFloat((amount * 0.72).toFixed(2));
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = { poundsToDollars, dollarsToPounds };
} else {
	window.poundsToDollars = poundsToDollars;
	window.dollarsToPounds = dollarsToPounds;
}

