module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/modal.html',
    scope: {
      modal: '=modal'
    },
    controller: function($scope) {
    }
  }
};
