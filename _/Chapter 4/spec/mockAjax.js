describe("Using mock-ajax for Asynchronous operations testing", function() {
	
	beforeEach(function() {
		jasmine.Ajax.install();
	});
	
	
	afterEach(function() {
		jasmine.Ajax.uninstall();
    });
	
it("Checking weather report AJAX API", function() {
	var successFunction = jasmine.createSpy("success");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(args) {
		if (this.readyState == this.DONE) {
			successFunction(this.responseText);
		}
	};

	xhr.open("GET", "/get/weather/IN-Mumbai");
	xhr.send();
console.log(jasmine.Ajax.requests.mostRecent().url);
	expect(jasmine.Ajax.requests.mostRecent().url).toBe('/get/weather/IN-Mumbai');
	expect(successFunction).not.toHaveBeenCalled();
	console.log(jasmine.Ajax.requests.mostRecent());
	jasmine.Ajax.requests.mostRecent().respondWith({
		"status": 200,
		"contentType": 'text/plain',
		"responseText": 'Temp 25 C, Sunlight'      
	});
	expect(successFunction).toHaveBeenCalledWith('Temp 25 C, Sunlight');
});
});

