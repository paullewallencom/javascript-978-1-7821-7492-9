describe("Setup and Teardown", function() {
	var count = 0;
	var velocity = 0;	
	beforeEach(function() {
		velocity = 100;
		count++;
		console.log("Count is "+ count);
	});

	afterEach(function() {
		velocity = 0;
		console.log("Some spec just finished and this function is called");
	});

	beforeAll(function(){
		console.log("This is called only once, specs are about to run.");
	});
	
	afterAll(function(){
		console.log("All specs finished, time for cleanup");
	});
	
	it("Testing Velocity and reducing velocity", function() {
		expect(velocity).toEqual(100);
		velocity = 20;
		expect(velocity).toBe(20);
	});

	it("Testing Velocity", function() {
		expect(velocity).toEqual(100);
		expect(true).toEqual(true);
	});
});

describe("Setup and Teardown using this keyword", function() {
	beforeEach(function() {
		this.velocity = 100;
	});

	afterEach(function() {
		this.velocity = 0;
	});
	
	it("Testing Velocity", function() {
		expect(this.velocity).toEqual(100);
		this.velocity = 20;
		expect(this.velocity).toBe(20);
		this.acceleration = 5;
	});
	
	it("Testing acceleration", function(){
		expect(this.acceleration).toBeUndefined();
	});

});
