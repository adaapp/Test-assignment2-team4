function poundsToDollars(amount) {
  if(typeof amount !== "string"){
    throw new Error ("Error: You havent entered a number")
  }
	//Coverting from pounds to dollars
	return amount * 1.39;
}

function dollarsToPounds(amount) {
	//Converting from Dollars to Pounds
	return amount * 0.72;
}
module.exports = { poundsToDollars, dollarsToPounds };
