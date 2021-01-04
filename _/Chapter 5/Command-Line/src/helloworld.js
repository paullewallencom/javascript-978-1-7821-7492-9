myapp = {};

myapp.HelloWorldApp = function() { };

myapp.HelloWorldApp.prototype.say = function(name) {
  return "Hello " + name + "!";
};