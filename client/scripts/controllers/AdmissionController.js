module.exports = function($scope, PatientIncubator, Patient) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.admit = function() {
    var patient = $scope.patient;
    console.log('Admitting new patient');

    // Duplicate fields for future lookup
    patient.ward = 'AAU';
    patient.bed = '-';
    patient.age = patient.admission.data.age;
    patient.pew = 0;
    patient.nurse = '-';
    patient.gender = patient.admission.data.gender;
    patient.name = patient.admission.data.forename + ' ' +
      patient.admission.data.surname;

    Patient.save(patient);
  };


  // Data for community forms
  $scope.community = {
    member: ''
  };

  // Data for sibling input
  $scope.selectedSibling = -1;
  $scope.addSibling = function() {
    $scope.patient.admission.data.siblings.push({
      name: 'Name',
      gender: '',
      age: '',
      info: ''
    })
  };

  // Data for allergy input
  $scope.selectedAllergy = -1;
  $scope.addAllergy = function() {
    console.log('add allergy');
    $scope.patient.admission.medicalHistory.allergies.push({
      allergen: 'Allergen',
      reaction: '',
      corrective: ''
    });
  };

};
