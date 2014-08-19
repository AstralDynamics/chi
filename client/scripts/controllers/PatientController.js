module.exports = function($scope, $firebase, $stateParams, Patient) {
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

  // Listen for new messages
  /*patient.$child('messages').on('change', function(message) {
    var notification = {
      icon: 'fa fa-envelope',
      from: message.from,
      to: patient.name,
      time: message.time
    };

    $scope.notifications.$add(notification);
  });
  */



};

