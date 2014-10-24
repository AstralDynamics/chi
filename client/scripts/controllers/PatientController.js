module.exports = function($scope, $firebase, $stateParams, Patient, PatientIncubator) {
  var id = $stateParams.id;

  // redirect invalid users
  if(id.length <= 0) {
    window.location.replace('#/app/patients');
    return;
  }

  var patient = $scope.patient = $firebase(Patient.get(id));
  $scope.id = id;
  $scope.notifications = patient.$child('notifications');

  $scope.checkout = function() {
    // remove from db
  };

  $scope.admit = function() {
    PatientIncubator.incubate(patient);
    window.location.replace('#/app/admit/dash');
  };

};

