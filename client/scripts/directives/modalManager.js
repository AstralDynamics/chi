module.exports = function(Notify) {
  return {
    restrict: 'A',
    templateUrl: '/partials/modalManager.html',
    controller: function($scope) {
      $scope.modals = [];

      Notify.on('modal', function(modal) {
        console.log(modal);
        $scope.modals.push(modal);
      });
    }
  }
};
