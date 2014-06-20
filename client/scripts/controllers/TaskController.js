module.exports = function($scope, TaskFactory) {

  $scope.selected;
  $scope.tasks = TaskFactory.tasks;
  console.log($scope.tasks);

  $scope.edit = function() {
    // edit the selected task
  };

  $scope.cancel = function() {
    // hide the selected task
  };

  $scope.create = function() {
    // switch to task creation view
  };


};
