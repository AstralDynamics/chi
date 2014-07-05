module.exports = function(Node) {
  var nodes = [];

  function createNode(name, links, value) {
    links = links || [];
    if(!nodes[name]) {
      nodes[name] = new Node(name, value, links.map(function(link) {
        return createNode(link, []);
      }));
    }
    return nodes[name];
  }

  return {
    createNode: createNode
  }
};
