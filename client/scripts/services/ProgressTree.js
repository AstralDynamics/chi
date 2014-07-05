module.exports = function(Node) {
  var nodes = [];

  function createNode(name, links) {
    console.log(arguments);
    if(!nodes[name]) {
      nodes[name] = new Node(name, 0, links);
    }
    return nodes[name];
  }

  return {
    createNode: createNode
  }
};
