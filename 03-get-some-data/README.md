Demonstrate how to pull data using the $http service.

Show how to use $httpBackend for testing and discuss the differences
between unit testing and integration testing.

This example uses the Freebase API with a JSONP interface

http://wiki.freebase.com/wiki/API

I choose freebase because it is free, interesting and reasonably complex.  The JSONP allows us to ignore cross browser issues for the demo.  

### freebase
Load a hardcoded result set on page load

### freebase-interactive
Load a results based on an input box and load the result set whenever the input changes.  This will demonstrate how to watch a variable for change, and how to test code that relies on watching.