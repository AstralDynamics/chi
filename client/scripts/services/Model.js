module.exports = function(db) {
  return function(name) {
    var root = db.child(name);

    function fromDb(id) {
      return root.child(id);
    }

    function save(model) {
      root.push(model);
    }

    function getAll() {
      console.log(root);
      return root.getAll();
    }

    return {
      fromDb: fromDb,
      save: save,
      getAll: getAll
    }
  }
}
