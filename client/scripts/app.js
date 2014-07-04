angular.module('chai', ['ngRoute', 'firebase'])

.factory({
  resources: require('./services/resources'),
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientIncubator: require('./services/PatientIncubator'),
  PatientTemplate: require('./services/PatientTemplate'),
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


  // Patient Data
  // ------------
  // Form components from patient data
  .when('/admission/components/nameAddress', {
    templateUrl: '/views/forms/components/nameAddress.html'
  })
  .when('/admission/components/patientInformation', {
    templateUrl: '/views/forms/components/patientInformation.html'
  })
  .when('/admission/components/nextOfKin', {
    templateUrl: '/views/forms/components/nextOfKin.html'
  })
  .when('/admission/components/siblings', {
    templateUrl: '/views/forms/components/siblings.html'
  })


  // Development
  // ------------
  // Form components for development
  .when('/admission/components/communication', {
    templateUrl: '/views/forms/components/communication.html'
  })
  .when('/admission/components/socialDevelopment', {
    templateUrl: '/views/forms/components/socialDevelopment.html'
  })
  .when('/admission/components/mobility', {
    templateUrl: '/views/forms/components/mobility.html'
  })


  // Observations
  // ------------
  // Form components for obs
  .when('/admission/components/obs1', {
    templateUrl: '/views/forms/components/obs1.html'
  })
  .when('/admission/components/obs2', {
    templateUrl: '/views/forms/components/obs2.html'
  })
  .when('/admission/components/obs3', {
    templateUrl: '/views/forms/components/obs3.html'
  })


  // Urine/Pain/Skin
  // ---------------
  // Form components for UPS
  .when('/admission/components/urinalysis', {
    templateUrl: '/views/forms/components/urinalysis.html'
  })
  .when('/admission/components/painAssessment', {
    templateUrl: '/views/forms/components/painAssessment.html'
  })
  .when('/admission/components/skinIntegrity', {
    templateUrl: '/views/forms/components/skinIntegrity.html'
  })
  .when('/admission/components/skinIntegrity2', {
    templateUrl: '/views/forms/components/skinIntegrity2.html'
  })


  // Medical History
  // ---------------
  // Form components for Medical History
  .when('/admission/components/medicalHistory', {
    templateUrl: '/views/forms/components/pastMedicalHistory.html'
  })
  .when('/admission/components/allergies', {
    templateUrl: '/views/forms/components/allergies.html'
  })
  .when('/admission/components/medication', {
    templateUrl: '/views/forms/components/medication.html'
  })
  .when('/admission/components/listOfMeds', {
    templateUrl: '/views/forms/components/listOfMeds.html'
  })


  // Living
  // ------
  // Form components for Living Forms
  .when('/admission/components/nutrition', {
    templateUrl: '/views/forms/components/nutrition.html'
  })
  .when('/admission/components/hygiene', {
    templateUrl: '/views/forms/components/hygiene.html'
  })
  .when('/admission/components/sleeping', {
    templateUrl: '/views/forms/components/sleeping.html'
  })

  // Safety
  // ------
  // Form components for Living Forms
  .when('/admission/components/communityInvolvement', {
    templateUrl: '/views/forms/components/communityInvolvement.html'
  })
  .when('/admission/components/safeguardingChildren', {
    templateUrl: '/views/forms/components/safeguardingChildren.html'
  })
  .when('/admission/components/manualHandling', {
    templateUrl: '/views/forms/components/manualHandling.html'
  })

  // Admission
  // ---------
  .when('/admission/components/info', {
    templateUrl: '/views/forms/components/infoChecklist.html'
  })
  .when('/admission/components/decision', {
    templateUrl: '/views/forms/components/decision.html'
  })

  .otherwise({
    redirectTo: '/'
  });
})

