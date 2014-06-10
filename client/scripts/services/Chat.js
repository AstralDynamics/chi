module.exports = function($timeout, Session, Firebase) {
  
  // Check id on initialization 
  if(!Session.user) {
    window.location.replace('#/identity');
  }
  console.log('Check auth', Session.user);

  var user, messages, users, typing, cooldown;

  user = Session.user.val();
  messages = Firebase.$reference.$child('chat/' + user.id);
  users = Firebase.$reference.$child('users');
  typing = false;

  function createMessage(msg) {
    msg.user = user;   
    return message; 
  }

  function chatTo(id) {
    return {
      to: users.$child(id),
      messages: messages.$child(id)
    }
  }

  function isTyping() {
    if(cooldown) {
      $timeout.cancel(cooldown);  
    } else {
      Session.user.$set('typing', true);
    }

    $timeout(function() {
      cooldown = Session.user.$set('typing', false);
    });
  }

  return {
    message: message,
    chatTo: chatTo,
    users: users
  };
};
