angular.module('chai', ['ui.router', 'firebase'])


.factory({
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientTemplate: require('./services/PatientTemplate'),
  PatientIncubator: require('./services/PatientIncubator')
})

.controller({
  AdmissionController: require('./controllers/AdmissionController')
})

.directive({
  radialProgress: require('./directives/radialProgress')
})

.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/app/dash');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
  })
  .state('app', { url: '/app', templateUrl: 'views/app.html' })
    .state('app.dash',     { url: '/dash',        templateUrl: 'views/nurse-dash.html' })
    .state('app.patient',  { url: '/patient/:id', templateUrl: 'views/patient.html' })
    .state('app.patients', { url: '/patients',    templateUrl: 'views/patients.html' })
    .state('app.other',    { url: '/otherdata',   templateUrl: 'views/other_data.html' })
    .state('app.messages', { url: '/messages',    templateUrl: 'views/messages.html' })
    .state('app.tasks',    { url: '/tasks',       templateUrl: 'views/tasks.html' })
    .state('app.admit',    { url: '/admit', templateUrl: 'views/admit.html' })
      .state('app.admit.dash',           { url: '/dash', templateUrl: 'views/forms/admission.html' })
      .state('app.admit.data',           { url: '/data', templateUrl: 'views/forms/sections/data.html' })
        .state('app.admit.nameAddress',        { url: '/name', templateUrl: 'views/forms/components/nameAddress.html', controller: 'AdmissionController'})
        .state('app.admit.patientInformation', { url: '/patient', templateUrl: 'views/forms/components/patientInformation.html', controller: 'AdmissionController' })
        .state('app.admit.nextOfKin',          { url: '/nextOfKin', templateUrl: 'views/forms/components/nextOfKin.html', controller: 'AdmissionController' })
        .state('app.admit.siblings',           { url: '/siblings', templateUrl: 'views/forms/components/siblings.html', controller: 'AdmissionController' })
      .state('app.admit.observations',   { url: '/obs', templateUrl: 'views/forms/sections/observations.html' })
      .state('app.admit.urinePainSkin',  { url: '/ups', templateUrl: 'views/forms/sections/urinePainSkin.html' })
      .state('app.admit.medicalHistory', { url: '/medical', templateUrl: 'views/forms/sections/medicalHistory.html' })
      .state('app.admit.living',         { url: '/living', templateUrl: 'views/forms/sections/living.html' })
      .state('app.admit.development',    { url: '/development', templateUrl: 'views/forms/sections/development' })
      .state('app.admit.safety',         { url: '/safety', templateUrl: 'views/forms/sections/safety.html' })
      .state('app.admit.information',    { url: '/information', templateUrl: 'views/forms/sections/information.html' })
      .state('app.admit.decision',       { url: '/decision', templateUrl: 'views/forms/sections/decision.html' });
});

