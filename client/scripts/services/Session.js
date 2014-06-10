module.exports = function(Firebase, Util) { 
  var session = {};

  console.log('Starting new session');
  session.create = function(id) {
    var hash, presence;
 
    if(!session.user) {
      hash = Util.createId(id);
      session.user = Firebase.reference.child('users/' + hash); 
      
      // Manage presence
      session.user.child('online').set(true); 
      Firebase.presence.onDisconnect(function() {
        session.user.child('online').set(false);
      });
      
      window.location.replace('#/chat');
    }

    return session.user;
  }

  return session;
};
