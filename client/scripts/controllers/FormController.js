module.exports = function($scope) {
  $scope.showModal = false;
  $scope.forms = [];

  $scope.openModal = function() {
    $scope.showModal = true;
  };

  $scope.closeModal = function() {
    $scope.showModal = false;
  };

  $scope.addForm = function(form) {
    $scope.forms.push({
      name: 'Safeguarding',
      url: '#/app/forms/safeguarding'
    });
  };

};
