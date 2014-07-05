module.exports = function() {

  function Node(name, value, links) {
    this.name = name || '__default__';
    this.value = value || 0;
    this.links = links || [];
  };

  // Updates the node's value
  Node.prototype.update = function(value) {
    console.log('Updating node value', this);
    this.value = value;
  };

  // Traverses the tree, passes every discovered
  // node to a callback
  Node.prototype.traverse = function(callback) {
    console.log('Traversing node', this);
    var args = arguments;
    this.links.forEach(function(node) {
      callback(node);
      node.traverse.apply(node, args);
    });
  };

  // Sums values of all nodes in the tree
  Node.prototype.aggregate = function() {
    console.log('Aggregating node', this);
    this.links.forEach(function(node) {
      this.value += node.aggregate();
    });
    return this.value;
  };

  return Node;
}
