module.exports = function() {
  return {
    restrict: 'A',
    template: '<div class="predict">' +
                '<div ng-transclude></div>' +
                '<div class="suggestions" ng-show="suggestions.length">' +
                  '<div class="suggestion"' +
                    'ng-repeat="suggestion in suggestions">' +
                    '<div ng-bind="suggestion" ng-click="use(suggestion)"></div>' +
                  '</div>' +
                '</div>' +
              '</div>',
    transclude: true,
    scope: {
      dictionary: '=ngPredict'
    },

    link: function(scope, element, attributes) {
      element.on('change', function() {
        scope.predict(element.val());
      });
    },

    controller: function($scope, $element) {
      $scope.suggestions = ['hello'];

      // Use the suggestion
      $scope.use = function(word) {
        $element.val(word);
        $scope.suggestions = [];
      };

      $scope.predict = function(seed) {
        if(seed.length == 0) {
          return [];
        }

        $scope.suggestions = $scope.dictionary.filter(function(word) {
          return word.startsWith(seed);
        });
      };
    }
  }
}
