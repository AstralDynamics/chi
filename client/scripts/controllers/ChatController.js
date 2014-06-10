module.exports = function($scope, Chat) {
  $scope.users = Chat.users;
  $scope.messages = [];
  $scope.to = {};
  $scope.input = '';
  
  $scope.submit = function() {
    if($scope.input && $scope.input.length > 0) {
      $scope.messages.$add(Chat.createMessage($scope.input));
    }
  };

  $scope.chatTo = function(id) {
    var chat = Chat.chatTo(id);
    $scope.to = chat.to;
    $scope.messages = chat.messages;
  };

}
