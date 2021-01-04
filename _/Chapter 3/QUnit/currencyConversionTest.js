var convertINR ={    
	currencyConversion : function(amount, rateOfConversion){
		var toCurrencyAmount = 0;
		// conversion		
		toCurrencyAmount = rateOfConversion * amount;
		// rounding off
		toCurrencyAmount = parseFloat(toCurrencyAmount).toFixed(2);
		return toCurrencyAmount;
    }
}