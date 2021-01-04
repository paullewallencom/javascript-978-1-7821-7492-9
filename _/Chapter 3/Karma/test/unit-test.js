describe('Convert Currency', function() {
	it('100 INR should be equal to $ 1.59', function() {
		expect(convertCurrency(100, 1/63)).toEqual('1.59');
	});
});