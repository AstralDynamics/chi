angular.module('sbri', ['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider
  .when('/identity', {
    templateUrl: '/partials/identity.html',
    controller: 'IdentityController'
  })
  .when('/chat', {
    templateUrl: '/partials/chat.html'
  })
})

.factory({
  Util: require('./services/Util'),
  Firebase: require('./services/Firebase'),
  Session: require('./services/Session'),
  Chat: require('./services/chat')
})

.controllers({
  IdentityController: require('./controllers/IdentityController'),
  ChatController: require('./controllers/ChatController')
})

.directives({
  ChatPresence: require('./directives/ChatPresence'),
  Chat: require('./directives/Chat')
});
