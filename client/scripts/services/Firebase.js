module.exports = function($firebase) {
  var reference;

  reference = new Firebase('https://sbri-app.firebaseio.com/');

  return {
    reference: reference,
    $reference: $firebase(reference)
  };
};
