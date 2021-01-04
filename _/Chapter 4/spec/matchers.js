describe("All the matchers", function() {
	// variables available for all specs
	var data1 = 3;
	var data2 = 2;
	var data3 = 5;

	// the function ‘it’ defines a spec 
	it("Checking the matchers : toBe()", function() {

		var a = 5, b=5;
		expect(a).toBe(5);
		expect(a).not.toBe("5");
	
		function sayHello(){};
		var funcVar = sayHello;
		expect(funcVar).toEqual(sayHello);
	
		expect(5).toEqual(5);

		expect(a).toBe(b);
		expect(a).not.toBe(null);
		
		a = 12;
		expect(a).toEqual(12);
		expect(a).not.toEqual(1);
		
		var strReg = "The quick brown fox";

		expect(strReg).toMatch(/The/);
		expect(strReg).toMatch("brown");
		expect(strReg).not.toMatch(/jump/);
	
		expect(add).toBeDefined();
		//expect(add).toBeUndefined(); // will not pass
		expect(add).not.toBeUndefined(); // will pass
		
	
		expect(a).not.toBeNull();
		expect(null).toBeNull();
		
	
		foo = "foo";
		a = false;
		b = true;
		expect(add(2,3)).toBeTruthy();
		expect(a).not.toBeTruthy();
		expect(add(0,0)).toBeFalsy();
		expect(a).toBeFalsy();
		expect(b).not.toBeFalsy();
		
		var fruits = ["apple", "orange", "grape","papaya", "peach", "banana" ];
		expect(fruits).toContain("apple");
		
		a = 2, b = 3;
		var c = 5.123423;
		expect(a).toBeLessThan(b);
		expect(c).not.toBeLessThan(a);
	
		expect(b).toBeGreaterThan(a);
		expect(b).not.toBeGreaterThan(c);
		expect(c).toBeCloseTo(5.1, 1) // will pass 
		expect(c).not.toBeCloseTo(5.1, 2) // will pass 
	
		f1 = function() {
		  return 1 + 2;
		};
		f2 = function() {
		  return undefinedVar + 1;
		};

		expect(f1).not.toThrow();
		expect(f2).toThrow();
		f3 = function() {
		  throw new TypeError("A custom Exception from f3");
		};

		//expect(f3).toThrowError("custom"); // will fail, strings do not match exactly
		expect(f3).toThrowError(/custom/); // will pass, uses regular expressions to match the string
		expect(f3).toThrowError(TypeError); // will pass, checks type of an exception
		expect(f3).toThrowError(TypeError, /custom/); // will pass, uses regular expressions
		//expect(f3).toThrowError(TypeError, "custom exception"); // will fail
	});	
});