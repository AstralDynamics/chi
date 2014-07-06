angular.module('EventEmitter', [])

.factory('$emitter', function() {
  return function() {
    var events = {};

    // Helper method for registering an event
    function _register(name) {
      var handlers;
      if(name in events && events[name] instanceof Array) {
        handlers = events[name]; 
      } else {
        handlers = events[name] = [];
      }
      return handlers;
    }

    // Add an event listener
    function on(name, handler) {
      var handlers = _register(name);
      handlers.push(handler);
    }

    // Remove an event listener
    function off(name, handler) {
      var handlers, index;
      handlers = _register(name);
      index = handlers.indexOf(handler);
      handlers.splice(index, 1);
    }

    // Emit a new event
    function emit(name, data) {
      var args, index, handlers;

      handlers = _register(name);
      args = [].slice.call(arguments, 1);
      for(index = 0; index < handlers.length; index++) {
        handlers[index].apply(null, args);
      }
    }

    return {
      on: on,
      off: off,
      emit: emit
    }
  }
});
