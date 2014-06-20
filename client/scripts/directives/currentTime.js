module.exports = function($interval, $filter) {
  return {
    restrict: 'A',
    scope: {
      'currentTime': '@currentTime'
    },
    link: function(scope, element, attributes) {
      var filter, template, named;

      template = scope.currentTime || 'h:m:s';
      filter = $filter('date');
      named = 'named' in attributes;

      $interval(function() {
        element.html(filter(Date.now(), template, named));
      }, 1000);
    }
  }
};
