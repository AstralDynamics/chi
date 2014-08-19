module.exports = function($scope, $firebase, Staff) {
  // get from auth in future
  var id = '-nbj';

  $scope.staff = $firebase(Staff.get(id));

};
