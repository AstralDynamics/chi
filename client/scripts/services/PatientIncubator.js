module.exports = function(PatientTemplate, Patient, $firebase) {
  var patient = null;

  function retrieve() {
    if(!patient) {
      create();
    }
    return patient;
  }

  function create() {
    patient = new PatientTemplate();
  }

  function loadFromDb(id) {
    patient = $firebase(Patient.fromDb(id));
  }

  function done() {
    patient = null;
  }

  return {
    loadFromDb: loadFromDb,
    retrieve: retrieve,
    create: create,
    done: done
  }
};
