module.exports = function($emitter) {
  var events = new $emitter();

  return {
    on: events.on,
    emit: events.emit
  }
};
