module.exports = function($scope, $firebase, WardMessage) {
  $scope.messages = $firebase(WardMessage.getAll());

  $scope.message = '';

  $scope.post = function() {
    WardMessage.save({
      from: 'Dr Kurmos',
      glyph: {
        primary: 2,
        secondary: 3,
        tertiary: 5,
        gender: 'm'
      },
      time: Date.now(),
      body: $scope.message
    });
  };
};
