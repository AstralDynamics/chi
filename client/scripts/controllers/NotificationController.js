module.exports = function($scope, $firebase, $timeout, WardMessage) {

  $scope.messages = 0;
  $scope.messagesActive = false;

  var messages = $firebase(WardMessage.getAll());

  messages.$on('loaded', function() {
    messages.$on('change', function() {
      $scope.messages += 1;
      $scope.messagesActive = true;
      $timeout(function() {
        $scope.messagesActive = false;
      }, 3000);
    });
  });

};
