module.exports = function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pew: '=',
      up: '=',
      down: '='
    },
    template:
    "<div class='pew pill' ng-class='{ high: pew > 4, low: pew < 3}'>" +
      "<i class='fa fa-arrow-up' ng-show='up'></i>" +
      "<span class='number' ng-bind='pew'></span>" +
      "<i class='fa fa-arrow-down' ng-show='down'></i>" +
    "</div>",
    link: function(scope) {
    }
  };
};
