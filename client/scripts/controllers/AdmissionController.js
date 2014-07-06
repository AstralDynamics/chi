module.exports = function($scope, PatientIncubator, Patient) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.admit = function() {
    var patient = $scope.patient;
    console.log('Admitting new patient');

    // Duplicate fields for future lookup
    patient.ward = 'AAU';
    patient.bed = 'Not assigned';
    patient.age = patient.admission.data.age;
    patient.pew = 0;
    patient.nurse = 'Not assigned';
    patient.gender = patient.admission.data.gender;
    patient.name = patient.admission.data.preferredName + ' ' +
      patient.admission.data.surname;

    Patient.save(patient);
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
