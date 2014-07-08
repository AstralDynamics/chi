module.exports = function($scope, Patient) {
  $scope.patients = Patient.getAll();


  console.log($scope.patients);
};
