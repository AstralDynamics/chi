module.exports = function() {
  return function(due) {
    return due - Date.now();
  }
};
