module.exports = function($scope, Auth) {
  $scope.id = '';
  $scope.error = false;
  console.log('Auth controller loading');

  $scope.submit = function() {
    Auth.authenticate($scope.id)
    .then(function() {
      console.log('Signed in');
      window.location.replace('#/dash');
    })
    .catch(function() {
      console.error('Could not sign in');
      $scope.error = true;
      $scope.$apply();
    });
  };
}
