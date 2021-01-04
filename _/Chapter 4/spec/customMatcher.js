var customMatchers = {
	toBePresent: function(util, customEqualityTesters){
		return{
			compare : function(employee){
				
				var statusCode = employee.getAttendance();
				var result = {};
				result.pass = util.equals(statusCode, 1 , customEqualityTesters);
				if(result.pass){
					result.message = "Employee "+employee.getName()+" is present today";
				}else{
					result.message = "Employee "+employee.getName()+" is absent today";
				}
				return result;
			}
		
		}
	}
}
describe("Custom Matcher", function(){
	
	beforeEach(function(){
		jasmine.addMatchers(customMatchers);
	});
	
	it("Expected employee to be present ", function(){
		var alice = new Employee("Alice", 5, "Testing");
		alice.markAttendance(2);
		console.log(alice);
		expect(alice).not.toBePresent();
	});
});
