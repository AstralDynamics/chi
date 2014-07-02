module.exports = function(db) {
  return function(name) {
    function fromDb(id) {
      return db.child(name)
      .child(id);
    }

    return {
      fromDb: fromDb
    }
  }
}
