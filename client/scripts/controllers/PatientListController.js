module.exports = function($scope, $firebase, Patient) {
  $scope.patients = $firebase(Patient.getAll());
};
