HelloWorldTest = TestCase("HelloWorldTest");
HelloWorldTest.prototype.testSay = function() {
	var helloWorldApp = new myapp.HelloWorldApp();
	assertEquals("Hello Reader!", helloWorldApp.say("Reader"));
};