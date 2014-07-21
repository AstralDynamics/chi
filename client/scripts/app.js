angular.module('chai', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
  })

  .state('app', {
    url: '/',
    templateUrl: 'views/app.html'
  })

  .state('app.patients', {
    url: '/patients',
    templateUrl: 'views/patients.html'
  })

  .state('app.tasks', {
    url: '/tasks',
    templateUrl: 'views/tasks.html'
  })

  .state('app.messages', {
    url: '/messages',
    templateUrl: 'views/messages.html'
  });

});

