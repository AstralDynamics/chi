module.exports = function($scope, $firebase, Patient) {
  $scope.patients = Patient.getAll();

  console.log($scope.patients);
};
