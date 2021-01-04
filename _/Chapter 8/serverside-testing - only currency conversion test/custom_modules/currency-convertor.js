var convertCurrency = function(fromCurrencyAmount,fromCurrencyToCurrenceyRateOfConversion)
{
	var toCurrencyAmount = 0;
	// conversion		
	toCurrencyAmount = fromCurrencyToCurrenceyRateOfConversion * fromCurrencyAmount;
	// rounding off
	toCurrencyAmount = parseFloat(Math.round(toCurrencyAmount * 100) / 100).toFixed(2);
	return toCurrencyAmount;
}
module.exports = convertCurrency;