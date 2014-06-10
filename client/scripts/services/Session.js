module.exports = function(Firebase, Util) { 
  var user;
  
  return function(id) {
    var hash, presence;
    
    if(!user) {
      hash = Util.createId(id);
      user = Firebase.reference.child('users/' + hash); 
      user.$set('online', true);
    }

    return {
      user: user
    }
  }
};
