module.exports = function($rootScope, $q, Staff) {
  var profile = null;

  function authenticate(id) {
    var deferred = $q.defer();

    Staff.fromDb(id)
    .on('value', function(snapshot) {
      profile = snapshot.val();

      // profile will be null if does not exist
      if(profile) {
        authenticated = true;
        deferred.resolve(profile);
      } else {
        deferred.reject(profile);
      }
    });

    return deferred.promise;
  }

  function getProfile() {
    return profile;
  }

  return {
    authenticate: authenticate,
    getProfile: getProfile
  }
};
