module.exports = function($scope, TaskFactory) {

  $scope.selected = -1;
  $scope.tasks = TaskFactory.tasks;

  $scope.now = Date.now.bind(Date);

  // Calculate the time at which a
  // task is due
  $scope.radarPercent = function(due) {
    var shift = 18000000;
    return Math.floor((due / (Date.now() + shift)) * 100);
  };

  $scope.percentComplete = function(task) {
    var time;
    time = (task.due - Date.now()) / (task.due - task.date) * 100;
    return Math.floor(time);
  };

  $scope.toggleSelection = function(index) {
    if($scope.selected !== index) {
      $scope.selected = index;
    } else {
      $scope.selected = -1;
    }
  };

  $scope.getSelected = function() {
    return $scope.tasks[$scope.selected];
  };

  $scope.edit = function() {
    // edit the selected task
    console.log('edit');
    TaskFactory.editTask($scope.getSelected());
    window.location.replace('#/tasks/edit');
  };

  $scope.cancel = function() {
    // hide the selected task
    $scope.getSelected().hidden = true;
  };

  $scope.complete = function() {

  };

  $scope.create = function() {
    // switch to task creation view
  };


};
