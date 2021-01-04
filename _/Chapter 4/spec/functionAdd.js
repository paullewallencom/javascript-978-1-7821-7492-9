describe("Testing Mathematic operations", function() {
		// variables available for all specs
		var numberA = 3;
		var numberB = 2;

		// the function ‘it’ defines a spec 
		it("Spec for Add operation", function() {
			expect(add(numberA, numberB)).toEqual(5);
		});
		
	});
describe("A suite", function() {
	it("A spec", function(){
		expect(true).toBeTruthy();
	});
	xit("Another spec", function(){
		
	});
	xit("Disabled spec", function(){
		
	}); 
});

xdescribe("Disabled suite", function(){
	it("A spec", function(){
		expect(true).toBeTruthy();
	});	
});
