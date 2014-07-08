module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/notificationsBar.html',
    controller: function($scope, Notify) {
      $scope.notifications = [];
      $scope.types = {
        patients: 'fa fa-user',
        tasks: 'fa fa-tasks',
        chat: 'fa fa-envelope-o',
        steam: 'fa fa-fire'
      };

      $scope.type = function(type) {
        return $scope.notifications.filter(function(noti) {
          return noti.type === type;
        });
      };

      $scope.count = function(type) {
        return $scope.type.apply(this, arguments).length;
      };

    }
  }
};
