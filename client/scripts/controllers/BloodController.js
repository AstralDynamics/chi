module.exports = function($scope, $timeout) {

  $scope.synced = false;

  $scope.red = false;
  $scope.brown = false;
  $scope.blood = false;

  $timeout(function() {
    $scope.synced = true;
  }, Math.random() * 10000);


};
