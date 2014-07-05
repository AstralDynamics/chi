module.exports = function($scope, PatientIncubator) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.community = {
    member: ''
  };

  $scope.selectedSibling = 0;
  $scope.addSibling = function() {
    $scope.patient.admission.data.siblings.push({
      name: 'Name',
      gender: '',
      age: '',
      info: ''
    })
  };

  $scope.selectedAllergy = 0;
  $scope.addAllergy = function() {
    console.log('add allergy');
    $scope.patient.admission.medicalHistory.allergies.push({
      allergen: 'Allergen',
      reactiion: 'Reaction',
      corrective: 'Corrective measure'
    });
    console.log($scope.patient.admission.medicalHistory.allergies);
  };

};
