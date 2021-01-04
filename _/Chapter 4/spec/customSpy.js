describe("Custom spy", function(){
	
	var alice;
	
	beforeEach(function(){
		alice = new Employee("Alice", 5, "Testing");
		
		// creating a new spy for yet undefined function assignTask()
		alice.assignTask = jasmine.createSpy("assignTask");
		
		alice.getName = jasmine.createSpy("getName").and.returnValue("Ms Alice");
		
	});
	
	it("Expect assignTask to be defined",function(){
		expect(alice.assignTask).toBeDefined();
	});
	it("Expect assignTask to be called",function(){
		alice.assignTask();
		expect(alice.assignTask.calls.any()).toEqual(true);
	});
	
	it("Expect assignTask to be called with arguments",function(){
		alice.assignTask("Test the login of application");
		expect(alice.assignTask.calls.argsFor(0)).toEqual(["Test the login of application"]);
	});
	
	it("Expect name to be with title Mr or Ms", function(){
		console.log(alice.getName());
		expect(alice.getName()).toEqual("Ms Alice");
	});
	
});

describe("Custom spy object", function(){
	var car;
	beforeEach(function(){
		car = jasmine.createSpyObj('car', ['start','stop','openDoor']);
		car.start();
		car.stop();
		car.openDoor();
	});
	
	it("Expect car to be started",function(){
		expect(car.start).toHaveBeenCalled();
	});
	it("Expect car to be stopped",function(){
		expect(car.start).toHaveBeenCalled();
		expect([12,323]).toEqual(jasmine.any(Array));
		expect({}).toEqual(jasmine.any(Object));
		expect(21312312).toEqual(jasmine.any(Number));
		
	});
	
});
