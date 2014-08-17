module.exports = function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pew: '='
    },
    template:
    "<div class='pew pill' ng-class='{ high: pew > 5, low: pew < 3}'>" +
      "<i class='fa fa-arrow-up'></i>" +
      "<span class='number' ng-bind='pew'></span>" +
    "</div>",
    link: function(scope) {
      console.log(scope.pew);
    }
  };
};
