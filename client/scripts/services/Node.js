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
    var index, node;

    console.log('Aggregating node', this);
    console.log('Links', this.links);

    for(index = 0; index < this.links.length; index++) {
      node = this.links[index];
      console.log('each', node.name, node.aggregate());
      this.value += node.aggregate() / this.links.length;
      console.log('value', node.aggregate(), this.links.length);
    }
    return this.value;
  };

  return Node;
}
