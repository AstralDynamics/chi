module.exports = function($firebase) {
  var reference, presence;

  reference = new Firebase('https://sbri-app.firebaseio.com/');
  presence = reference.child('disconnectmessage'); 

  return {
    reference: reference,
    $reference: $firebase(reference),
    presence: presence
  }
};
