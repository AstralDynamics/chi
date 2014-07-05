module.exports = function($scope, PatientIncubator) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.community = {
    member: ''
  };
  $scope.siblings = [];
  $scope.allergies = [];
};
