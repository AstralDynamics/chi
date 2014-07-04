module.exports = function($scope, PatientIncubator) {
  $scope.patient = PatientIncubator.retrieve();
};
