module.exports = function(TaskFactory) {
  return {
    restrict: 'A',

    templateUrl: '/partials/taskEditor',

    controller: function($scope, resources) {

      $scope.resources = resources;
  
      // task model
      $scope.task = {
        title: '',
        color: '',
        icon: '',
        description: '',
        duration: 0
      };

      $scope.create = function() {
        // create the task
        TaskFactory.createTask($scope.task);
      };

      $scope.cancel = function() {
        // return to previous view
      };

    }
  }
}
