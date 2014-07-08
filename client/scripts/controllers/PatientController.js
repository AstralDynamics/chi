module.exports = function($scope, $routeParams, $firebase, Patient) {
  var patientId = $routeParams.id;
  $scope.patient = $firebase(Patient.fromDb(patientId));


  $scope.chartType = 'line';
  $scope.config = {
    legend: {
      display: true,
      position: 'left'
    }
  };

  $scope.data = {
    series: ['PEWS', 'Steam'],
    data: [{
      x: '26/6',
      y: [3, 2]
    },{
      x: '27/6',
      y: [4, 6]
    },{
      x: '28/6',
      y: [1, 3]
    }]
  };

};
