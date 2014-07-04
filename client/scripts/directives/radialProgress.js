module.exports = function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: '/partials/radialProgress.html',
    scope: {
      radialProgress: '=radialProgress'
    },
    link: function(scope, element, attributes) {
      // Cap so that right will render correctly
      scope.degrees = function(cap) {
        var deg = scope.radialProgress * 360;
        if(deg > 180 && cap) deg = 180;
        return deg;
      }
    }
  }
};
