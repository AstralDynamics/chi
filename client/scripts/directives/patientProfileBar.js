module.exports = function() {
  return {
    restrict: 'AE',
    scope: {
      patient: '='
    },
    templateUrl: 'partials/patient-profile-bar.html'
  };
};
