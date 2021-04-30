function poundsToDollars(amount) {
	if (isNaN(amount)) {
		throw new Error('Error: You havent entered a number');
	}
	let amountToString = amount + '';
	decimalPoint = amountToString.indexOf('.');
	numAfterPoint = amountToString.substring(decimalPoint);
	if (numAfterPoint.length > 3) {
		// use number '3' because includes decimal point
		throw new Error('Error: It should be 2 decimal places'); // if numAfterPoint is greater than 3 means there is more than 2 numbers after the decimal point, hence invalid currency
	}
		//Coverting from pounds to dollars
		return amount * 1.39;
}

function dollarsToPounds(amount) {
	//Converting from Dollars to Pounds
	if (isNaN(amount)) {
		throw new Error('Error: You havent entered a number');
	}
	let amountToString = amount + '';
	decimalPoint = amountToString.indexOf('.');
	numAfterPoint = amountToString.substring(decimalPoint);
	if (numAfterPoint.length > 3) {
		// use number '3' because includes decimal point
		throw new Error('Error: It should be 2 decimal places'); // if numAfterPoint is greater than 3 means there is more than 2 numbers after the decimal point, hence invalid currency
	}
		//Coverting from pounds to dollars
		return amount * 0.72;
}

module.exports = { poundsToDollars, dollarsToPounds };
