module.exports = function($scope, $firebase, Auth, Patient, Notify, timeOfDay) {

  $scope.init = function() {
    var profile = Auth.getProfile();

    if(!profile) {
      console.error('Not signed in');
      window.location.replace('#/auth');
      return;
    }

    $scope.patients = {};//$firebase(Patient.getAll());
    console.log('profile', profile);
    //$scope.staff = $firebase(profile);
    console.log('type', typeof profile);
    $scope.staff = profile;
  }

  $scope.timeOfDay = timeOfDay;
  function isIt(phase) {
    return function() {
      return $scope.timeOfDay() === phase;
    }
  }
  $scope.morning = isIt('Morning');
  $scope.afternoon = isIt('Afternoon');
  $scope.evening = isIt('Evening');
  $scope.night = isIt('Night');

};

