QUnit.test("currency conversion example", function( assert ) {
    assert.equal(convertINR.currencyConversion(100,1/63),'1.59', "100 INR is equal to 1.59 USD" );
});