module.exports = function($scope, $routeParams, $firebase, Patient, PatientIncubator) {
  var patientId = $routeParams.id;
  $scope.patient = {}//$firebase(Patient.fromDb(patientId));

  $scope.discharge = function() {
    $scope.patient.$set(null);
    window.location.replace('#/dash');
  };

  $scope.observations = function() {
    PatientIncubator.loadFromDb(patientId);
    window.location.replace('#/admission/components/obs1');
  };

  $scope.admissions = function() {
    PatientIncubator.loadFromDb(patientId);
    window.location.replace('#/admission');
  };

  $scope.chartType = 'line';
  $scope.config = {
  };

  $scope.data = {
    series: ['PEWS', 'Steam'],
    data: [{
      x: '26/6',
      y: [3, 2]
    },{
      x: '27/6',
      y: [4, 6]
    },{
      x: '28/6',
      y: [1, 3]
    }]
  };

};
