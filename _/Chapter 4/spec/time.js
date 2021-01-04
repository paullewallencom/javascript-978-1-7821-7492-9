

describe("Utilizing Jasmine Clock", function() {
	var employee;

	beforeEach(function() {
		employee = new Employee("Alice", 5, "Testing");
		employee.checkAvailability = jasmine.createSpy("checkAvailability");
		jasmine.clock().install();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});
  
  it("Checks if Alice is available after one hour", function() {
	  
	// setting timeout for an hour  
    setTimeout(function() {
      employee.checkAvailability()
    }, 60 * 60 * 1000);

    expect(employee.checkAvailability).not.toHaveBeenCalled();

	// need to tick clock for 1 hour = 60 * 60 * 1000 milliseconds
    jasmine.clock().tick(60 * 60 * 1000);

    expect(employee.checkAvailability).toHaveBeenCalled();
  });

  it("Checks if Alice is available for next 3 hours", function() {
    setInterval(function() {
      employee.checkAvailability();
    }, 60 * 60 * 1000);

    expect(employee.checkAvailability).not.toHaveBeenCalled();

    jasmine.clock().tick(60 * 60 * 1000 + 1);
    expect(employee.checkAvailability.calls.count()).toEqual(1);

    jasmine.clock().tick(60 * 60 * 1000 + 1);
    expect(employee.checkAvailability.calls.count()).toEqual(2);

    jasmine.clock().tick(60 * 60 * 1000 + 1);
    expect(employee.checkAvailability.calls.count()).toEqual(3);
  });
});