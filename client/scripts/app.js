angular.module('chai', ['ui.router', 'firebase', 'n3-line-chart'])


.factory({
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientTemplate: require('./services/PatientTemplate'),
  PatientIncubator: require('./services/PatientIncubator')
})

.controller({
  AdmissionController: require('./controllers/AdmissionController'),
  GraphController: require('./controllers/GraphController')
})

.directive({
  radialProgress: require('./directives/radialProgress'),
  clickToggleClass: require('./directives/clickToggleClass'),
  pew: require('./directives/pew')
})

.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/app/dash');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
  })

  // consider writing a parser for a routes file
  //app.dash -> /dash : views/nurse-dash.html
  .state('app', { url: '/app', templateUrl: 'views/app.html' })
    .state('app.dash',           { url: '/dash',          templateUrl: 'views/nurse-dash.html' })
    .state('app.patients',       { url: '/patients',      templateUrl: 'views/patients.html' })
    .state('app.other',          { url: '/otherdata',     templateUrl: 'views/other-data.html' })
    .state('app.notifications',  { url: '/notifications', templateUrl: 'views/notifications.html' })
    .state('app.messages',       { url: '/messages',      templateUrl: 'views/messages.html' })
    .state('app.tasks',          { url: '/tasks',         templateUrl: 'views/tasks.html' })
    .state('app.patient',        { url: '/patient/:id',         templateUrl: 'views/patient.html' })
    .state('app.board',          { url: '/patient/:id/board',   templateUrl: 'views/message-board.html' })
    .state('app.blood',          { url: '/patient/:id/blood',   templateUrl: 'views/blood.html' })
    .state('app.notes',          { url: '/patient/:id/notes',   templateUrl: 'views/notes.html' })

    // medications
    .state('app.medications',    { url: '/patient/:id/medications',       templateUrl: 'views/medications.html' })
    .state('app.medicationList', { url: '/patient/:id/medications/list',  templateUrl: 'views/medications-list.html' })
    .state('app.medication',     { url: '/patient/:id/medication/:medId', templateUrl: 'views/medication.html' })
    .state('app.administer',     { url: '/patient/:id/administer/:medId', templateUrl: 'views/medication-administer.html' })

    // admissions forms
    .state('app.admit',          { url: '/admit', templateUrl: 'views/admit.html' })
      .state('app.admit.dash',       { url: '/dash', templateUrl: 'views/forms/admission.html' })
      // data
      .state('app.admit.data',       { url: '/data', templateUrl: 'views/forms/sections/data.html' })
        .state('app.admit.nameAddress',        { url: '/name',      templateUrl: 'views/forms/components/nameAddress.html', controller: 'AdmissionController'})
        .state('app.admit.patientInformation', { url: '/patient',   templateUrl: 'views/forms/components/patientInformation.html', controller: 'AdmissionController' })
        .state('app.admit.nextOfKin',          { url: '/nextOfKin', templateUrl: 'views/forms/components/nextOfKin.html', controller: 'AdmissionController' })
        .state('app.admit.siblings',           { url: '/siblings',  templateUrl: 'views/forms/components/siblings.html', controller: 'AdmissionController' })
      // observations
      .state('app.admit.observations',   { url: '/obs', templateUrl: 'views/forms/sections/observations.html' })
        .state('app.admit.obs1',   { url: '/obs1', templateUrl: 'views/forms/components/obs1.html' })
        .state('app.admit.obs2',   { url: '/obs2', templateUrl: 'views/forms/components/obs2.html' })
        .state('app.admit.obs3',   { url: '/obs3', templateUrl: 'views/forms/components/obs3.html' })
      // urine pain skin
      .state('app.admit.urinePainSkin',  { url: '/ups', templateUrl: 'views/forms/sections/urinePainSkin.html' })
      // medical history
      .state('app.admit.medicalHistory', { url: '/medical', templateUrl: 'views/forms/sections/medicalHistory.html' })
      // living
      .state('app.admit.living',         { url: '/living', templateUrl: 'views/forms/sections/living.html' })
      // development
      .state('app.admit.development',    { url: '/development', templateUrl: 'views/forms/sections/development' })
      // safety
      .state('app.admit.safety',         { url: '/safety', templateUrl: 'views/forms/sections/safety.html' })
      // information
      .state('app.admit.information',    { url: '/information', templateUrl: 'views/forms/sections/information.html' })
      // decision
      .state('app.admit.decision',       { url: '/decision', templateUrl: 'views/forms/sections/decision.html' });
});

