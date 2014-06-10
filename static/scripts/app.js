(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('sbri', ['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider
  .when('/identity', {
    templateUrl: '/partials/identity.html',
    controller: 'IdentityController'
  })
  .when('/chat', {
    templateUrl: '/partials/dash.html',
    controller: 'DashController'
  })
  .otherwise({
    redirectTo: '/identity'
  });
})

.factory({
  Util: require('./services/Util'),
  Firebase: require('./services/Firebase'),
  Session: require('./services/Session'),
  Chat: require('./services/Chat')
})

.controller({
  IdentityController: require('./controllers/IdentityController'),
  ChatController: require('./controllers/ChatController'),
  DashController: function($scope) {$scope.boo = 2;console.log('dash')}
})

.directive({
  chatPresence: require('./directives/ChatPresence'),
  chat: require('./directives/Chat')
});

},{"./controllers/ChatController":2,"./controllers/IdentityController":3,"./directives/Chat":4,"./directives/ChatPresence":5,"./services/Chat":6,"./services/Firebase":7,"./services/Session":8,"./services/Util":9}],2:[function(require,module,exports){
module.exports = function($scope, Chat) {
  $scope.users = Chat.users;
  $scope.messages = [];
  $scope.to = {};
  $scope.input = '';
  
  $scope.submit = function() {
    if($scope.input && $scope.input.length > 0) {
      $scope.messages.$add(Chat.createMessage($scope.input));
    }
  };

  $scope.chatTo = function(id) {
    var chat = Chat.chatTo(id);
    $scope.to = chat.to;
    $scope.messages = chat.messages;
  };

}

},{}],3:[function(require,module,exports){
module.exports = function($scope, Session) {
  $scope.id = '';

  $scope.submit = function() {
    var id, user;

    id = $scope.id || '__default__';
    Session.create(id);
    // Connect to Firebase to identify
  };
};

},{}],4:[function(require,module,exports){
module.exports = function(Chat) {
  return {
    restrict: 'A',
    templateUrl: '/partials/chat',
    controller: 'ChatController',
    link: function() {
      console.log('ere');
    }
  }
}

},{}],5:[function(require,module,exports){
module.exports = function(Chat) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on('keydown', function() {
        Chat.isTyping();  
      });

    }
  }
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
module.exports = function() {
  return {
    createId: function(id) {
      return CryptoJS.SHA1.apply(CryptoJS, arguments)
      .toString();
    }
  }
}

},{}]},{},[1])