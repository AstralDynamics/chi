module.exports = function($scope, PatientIncubator, Patient) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.admit = function() {
    console.log('Admitting new patient');
    Patient.save($scope.patient);
  };

  $scope.community = {
    member: ''
  };

  $scope.selectedSibling = -1;
  $scope.addSibling = function() {
    $scope.patient.admission.data.siblings.push({
      name: 'Name',
      gender: '',
      age: '',
      info: ''
    })
  };

  $scope.selectedAllergy = -1;
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
