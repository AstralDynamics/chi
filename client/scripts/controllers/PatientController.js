module.exports = function($scope, $routeParams, $firebase, Patient) {
  var patientId = $routeParams.id;
  $scope.patient = $firebase(Patient.fromDb(patientId));

  console.log($scope.patient);
};
