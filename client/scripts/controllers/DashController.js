module.exports = function($scope, $firebase, Auth, Patient) {
  console.warn('Dash loading');
  var profile = Auth.getProfile();

  if(!profile) {
    console.error('Not signed in');
    window.location.replace('#/auth');
  }

  //$scope.staff = $firebase(profile);
  $scope.patients = $firebase(Patient.getAll());

  console.log('Patients', Patient.getAll());
  console.log('Patients', $scope.patients);
  $scope.patients.$on('loaded', function(value) {
    console.log(value);
    console.log('data loaded');
  });
};

