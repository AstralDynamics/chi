angular.module('chai', ['ngRoute', 'firebase'])

.factory({
  TaskFactory: require('./services/TaskFactory'),
  NotificationCenter: require('./services/NotificationCenter'),
  resources: require('./services/resources')
})

.controller({
  TaskController: require('./controllers/TaskController'),
  PatientController: require('./controllers/PatientController')
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
    templateUrl: '/views/index.html'
  })

  // Patient specific
  .when('/patient/:id', {
    templateUrl: '/views/patient.html',
    controller: 'PatientController'
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

