module.exports = function() {
  return {
    restrict: 'A',
    transclude: true,
    template:
    '<div class="radial-progress">' +
      '<div class="wrapper" ng-class="{ halfway:degrees() > 180 }">' +
        '<div class="circle" style="-webkit-transform:rotate({{degrees()}}deg)"></div>' +
        '<div class="circle" style="-webkit-transform:rotate({{degrees(true)}}deg)"></div>' +
      '</div>' +
      '<div class="background wrapper halfway">' +
        '<div class="transclude" ng-transclude></div>' +
        '<div class="circle" style="-webkit-transform:rotate(360deg)"></div>' +
        '<div class="circle" style="-webkit-transform:rotate(180deg)"></div>' +
      '</div>' +
    '</div>',
    scope: {
      radialProgress: '=radialProgress'
    },
    link: function(scope, element, attributes) {
      // Cap so that right will render correctly
      scope.degrees = function(cap) {
        var deg = scope.radialProgress * 360;
        if(deg > 180 && cap) deg = 180;
        return deg;
      };
    }
  };
};
