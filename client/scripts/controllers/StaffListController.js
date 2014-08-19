module.exports = function($scope, $firebase, Staff) {
  $scope.staff = $firebase(Staff.getAll());
};
