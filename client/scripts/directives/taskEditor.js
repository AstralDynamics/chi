module.exports = function(TaskFactory) {
  return {
    restrict: 'A',

    templateUrl: '/partials/taskEditor.html',

    controller: function($scope, resources) {
      $scope.resources = resources;
      console.log(TaskFactory.editableTask);
      
      if(TaskFactory.editableTask) {
        $scope.task = TaskFactory.editableTask;
      } else {
        // task model
        $scope.task = {
          title: '',
          icon: {
            glyph: resources.icons.__default__,
            color: resources.colors.__default__
          },
          description: '',
          duration: 0
        };
      }
      $scope.create = function() {
        // create the task
        TaskFactory.createTask($scope.task);
        TaskFactory.flushEdit();
        window.location.replace('#/tasks');
      };

      $scope.cancel = function() {
        // return to previous view
        window.location.replace('#/tasks');
      };

    }
  }
}
