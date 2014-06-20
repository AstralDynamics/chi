module.exports = function() {
  var rooms;

  rooms = {
    general: []
  };

  function getRoom(name) {
    return rooms[name] || [];
  }

  return {
    getRoom: getRoom
  }
}
