var AsynchronousTest = AsyncTestCase('AsynchronousTest');

AsynchronousTest.prototype.testSomethingComplicated = function(queue) {
  var state = 0;

  queue.call('Step 1: schedule the window to increment our variable 5 seconds from now.', function(callbacks) {
    var myCallback = callbacks.add(function() {
      ++state;
    });
    window.setTimeout(myCallback, 5000);
  });

  queue.call('Step 2: then assert our state variable changed', function() {
    assertEquals(1, state);
  });
};