module.exports = function($scope, $firebase, Auth) {
  var profile = Auth.getProfile();

  if(!profile) {
    console.error('Not signed in');
    window.location.replace('#/auth');
  }

  $scope.staff = $firebase(profile);
};
