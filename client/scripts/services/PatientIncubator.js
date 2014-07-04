module.exports = function(PatientTemplate) {
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

  function done() {
    patient = null;
  }

  return {
    retrieve: retrieve,
    create: create,
    done: done
  }
};
