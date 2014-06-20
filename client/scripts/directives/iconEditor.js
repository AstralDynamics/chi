module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/iconEditor.html',
    scope: {
      icon: '=icon'
    },
    controller: function($scope, resources) {
      $scope.resources = resources;

      $scope.icon.glyph = $scope.icon.glyph || resources.icons.__default__;
      $scope.icon.color = $scope.icon.color || resources.colors.__default__;

      $scope.changeGlyph = function(glyph) {
        $scope.icon.glyph = glyph;
      };

      $scope.changeColor = function(color) {
        $scope.icon.color = color;
      };
    }
  }
}
