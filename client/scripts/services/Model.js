module.exports = function(db) {

  return function(name) {
    var root = db.child(name),
        cache = {};

    function get(id) {
      if(!cache[id]) {
        cache[id] = root.child(id);
      }
      return cache[id];
    }

    function save(model) {
      root.push(model);
    }

    function getAll() {
      return root;
    }

    return {
      save: save,
      get: get,
      getAll: getAll
    };
  };
};
