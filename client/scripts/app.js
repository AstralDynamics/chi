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
  DashController: require('./controllers/DashController'),
  AdmissionController: require('./controllers/AdmissionController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor'),
  systemBar: require('./directives/systemBar'),
  notificationsBar: require('./directives/notificationsBar'),
  radialProgress: require('./directives/radialProgress'),
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

  .when('/admission', {
    templateUrl: '/views/forms/admission.html',
    controller: 'AdmissionController'
  })

  // Admission data subsection
  .when('/admission/data', {
    templateUrl: '/views/forms/sections/data.html'
  })

  // Admission observations subsection
  .when('/admission/observations', {
    templateUrl: '/views/forms/sections/observations.html'
  })

  // Admission urine pain skin subsection
  .when('/admission/urinePainSkin', {
    templateUrl: '/views/forms/sections/urinePainSkin.html'
  })

  // Admission medical history subsection
  .when('/admission/medicalHistory', {
    templateUrl: '/views/forms/sections/medicalHistory.html'
  })

  // Admission living subsection
  .when('/admission/living', {
    templateUrl: '/views/forms/sections/living.html'
  })

  // Admission development subsection
  .when('/admission/development', {
    templateUrl: '/views/forms/sections/development.html'
  })

  // Admission safety subsection
  .when('/admission/safety', {
    templateUrl: '/views/forms/sections/safety.html'
  })

  // Admissions info
  .when('/admission/info', {
    templateUrl: '/views/forms/sections/info.html'
  })

  // Admission decision subsection 
  .when('/admission/decision', {
    templateUrl: '/views/forms/sections/decision.html'
  })

  // Patient Data
  // ------------
  // Form components from patient data
  .when('/admission/components/nameAddress', {
    templateUrl: '/views/forms/components/nameAddress.html'
  })
  .when('/admission/components/parentInformation', {
    templateUrl: '/views/forms/components/parentInformation.html'
  })
  .when('/admission/components/nextOfKin', {
    templateUrl: '/views/forms/components/nextOfKin.html'
  })
  .when('/admission/components/siblings', {
    templateUrl: '/views/forms/components/siblings.html'
  })



  .otherwise({
    redirectTo: '/'
  });
})

