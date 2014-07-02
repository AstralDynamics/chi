angular.module('chai', ['ngRoute', 'firebase'])

.factory({
  resources: require('./services/resources'),
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  Staff: require('./services/Staff'),
  Auth: require('./services/Authentication'),
  NotificationCenter: require('./services/NotificationCenter')
})

.controller({
  AuthController: require('./controllers/AuthController'),
  DashController: require('./controllers/DashController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor'),
  systemBar: require('./directives/systemBar'),
  notificationsBar: require('./directives/notificationsBar'),
  currentTime: require('./directives/currentTime')
})

.filter({
  date: require('./filters/date'),
  timeUntil: require('./filters/timeUntil')
})

.config(function($routeProvider) {
  $routeProvider

  // Home screen
  .when('/', {
    redirectTo: '/auth'
  })

  // Authentication screen
  .when('/auth', {
    templateUrl: '/views/authenticate.html',
    controller: 'AuthController'
  })

  // Aggregate/navigation view
  .when('/dash', {
    templateUrl: '/views/dash.html',
    controller: 'DashController'
  })

  // Patient specific
  .when('/patient/:id', {
    templateUrl: '/views/patient.html'
  })

  // Staff notes
  .when('/notes', {
    templateUrl: '/views/notes.html'
  })

  .when('/note/:id', {
    templateUrl: '/views/note.html'
  })

  // Note editor
  .when('/notes/edit', {
    templateUrl: '/views/editNote.html'
  })

  // Task list
  .when('/tasks', {
    templateUrl: '/views/tasks.html',
    controller: 'TaskController'
  })

  .when('/tasks/edit', {
    templateUrl: '/views/editTask.html'
  })

  // Async comms
  .when('/chat', {
    templateUrl: '/views/chat.html'
  })

  .otherwise({
    redirectTo: '/'
  });
})

