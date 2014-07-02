module.exports = function($scope, Auth) {
  $scope.id = '';
  $scope.error = false;

  $scope.submit = function() {
    Auth.authenticate($scope.id)
    .then(function() {
      console.log('hell');
      window.location.replace('#/dash');
    })
    .catch(function() {
      $scope.error = true;
      $scope.$apply();
    });
  };
}
