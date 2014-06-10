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
