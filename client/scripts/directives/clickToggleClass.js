module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      toggleClass: '@clickToggleClass'
    },
    link: function(scope, element, attrs) {
      element.on('click', function() {
        element.toggleClass(scope.toggleClass);
      });
    }
  };
};
