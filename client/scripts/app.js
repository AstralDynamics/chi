angular.module('chai', ['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider

  // Home screen
  .when('/', {
    templateUrl: '/views/index.html'
  })

  // Patients and staff
  .when('/patients', {
    templateUrl: '/views/patients.html'
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

.constant({
})

.factory({
  TaskFactory: require('./services/TaskFactory'),
  resources: require('./services/resources')
})

.controller({
  TaskController: require('./controllers/TaskController'),
  PatientController: require('./controllers/PatientController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor')
});

