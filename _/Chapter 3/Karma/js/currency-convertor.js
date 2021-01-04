function convertCurrency(amount, rateOfConversion){
	var toCurrencyAmount = 0;
	// conversion		
	toCurrencyAmount = rateOfConversion * amount;
	// rounding off
	//toCurrencyAmount = Math.round(toCurrencyAmount * 100) / 100;
	console.log(toCurrencyAmount);
	// toCurrencyAmount = Number.parseFloat(toCurrencyAmount).toFixed(2); // fails on IE
	toCurrencyAmount = parseFloat(toCurrencyAmount).toFixed(2);
	return toCurrencyAmount;
}