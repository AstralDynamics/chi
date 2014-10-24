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

  function incubate(reference) {
    patient = reference;
  }

  function done() {
    patient = null;
  }

  return {
    loadFromDb: loadFromDb,
    retrieve: retrieve,
    incubate: incubate,
    create: create,
    done: done
  };
};
