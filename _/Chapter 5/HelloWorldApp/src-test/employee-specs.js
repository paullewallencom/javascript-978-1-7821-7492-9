describe("Jasmine Spy", function() {
	it("Spying employee", function(){
		var alice = new Employee("Alice", 4, "Testing");
		
		spyOn(alice, "calculateSalary");
		console.log(alice.getDetails());
		expect(alice.calculateSalary).toHaveBeenCalled();
	});
	
	it("Spying employee with arguments", function(){
		var alice = new Employee("Alice", 4, "Testing");
		
		spyOn(alice, "calculateSalary");
		expect(alice.calculateSalary).not.toHaveBeenCalledWith(5);	
		var salary = alice.getSalary();
		console.log(salary);
	});
});



