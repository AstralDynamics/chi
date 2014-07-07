module.exports = function(ProgressTree) {
  return {
    restrict:'A',
    scope: {
      readLinks: '&nodeLinks',
      value: '=nodeValue'
    },
    link: function(scope, element, attrs) {
      var name, links;

      // don't try to evaluate
      name = attrs.nodeName;

      // evaluate as array of strings
      links = scope.readLinks();

      scope.node = ProgressTree.createNode(name, links, scope.value);
    }
  }
};
