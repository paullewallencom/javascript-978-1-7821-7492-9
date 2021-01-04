describe("Nested Suites - top suite", function(){
	var count = 0;
	beforeEach(function(){
		console.log("Count in top suite: "+count);
		count++;
	});
	afterEach(function(){
		console.log("Calling top afterEach");
	});
	it("Increases count", function(){
		console.log("Count : " +count);
		expect(true).toEqual(true);
	});
	describe("Nested Suites - Inner suite", function(){
		beforeEach(function(){
			console.log("Count in Inner suite: "+count);
			count++;
		});
		afterEach(function(){
			console.log("Calling inner afterEach");
		});
		it("Increases count", function(){
			console.log("Count : " +count);
			expect(true).toEqual(true);
		});
		describe("Nested Suites - inner most suite", function(){
			beforeEach(function(){
				console.log("Count in inner most suite: "+count);
				count++;
			});
			afterEach(function(){
				console.log("Calling inner most afterEach");
			});
			it("Increases count", function(){
				console.log("Count : " +count);
				expect(true).toEqual(true);
			});
		});
	});	
});

