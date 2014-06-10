module.exports = function($scope, Session) {
  $scope.id = '';

  $scope.submit = function() {
    var id, user;

    id = $scope.id || '__default__';
    Session.create(id);
    // Connect to Firebase to identify
  };
};
