customEqualityTester = function(employeeA, employeeB){
	if(typeof employeeA !== typeof employeeB ){
		return false;
	}
	return (employeeA.getEmail() === employeeB.getEmail()) && (employeeA.getName() === employeeB.getName())
}

describe("Checking Employee equality tester", function(){
	var employeeA, employeeB;
	beforeEach(function(){
		jasmine.addCustomEqualityTester(customEqualityTester);
		
		employeeA = new Employee("Alice", 5, "Testing");
		employeeA.setEmail("alice@example.com");
		employeeB = new Employee("Alice", 4, "Development");
		employeeB.setEmail("alice@example.com");
	});
	
	it("Should be equal", function(){
		expect(employeeA).toEqual(employeeB);
	});
	it("Should not be equal", function(){
		var employeeC = new Employee("Bob", 5, "Testing");
		employeeC.setEmail("bob@example.com");
		expect(employeeA).not.toEqual(employeeC);
	});
});