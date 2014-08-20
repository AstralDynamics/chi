require('./modules/time.js');

angular.module('chai', ['ui.router', 'firebase', 'time'])

.factory({
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientTemplate: require('./services/PatientTemplate'),
  PatientIncubator: require('./services/PatientIncubator'),
  WardMessage: require('./services/WardMessage'),
  Staff: require('./services/Staff')
})

.controller({
  AdmissionController: require('./controllers/AdmissionController'),
  GraphController: require('./controllers/GraphController'),
  PatientListController: require('./controllers/PatientListController'),
  PatientController: require('./controllers/PatientController'),
  StaffController: require('./controllers/StaffController'),
  StaffListController: require('./controllers/StaffListController'),
  NotificationController: require('./controllers/NotificationController'),
  WardMessageController: require('./controllers/WardMessageController'),
  FormController: require('./controllers/FormController')
})

.directive({
  radialProgress: require('./directives/radialProgress'),
  clickToggleClass: require('./directives/clickToggleClass'),
  pew: require('./directives/pew'),
  glyph: require('./directives/glyph'),
  patientProfileBar: require('./directives/patientProfileBar')
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
    .state('app.safeguarding',   { url: '/forms/safeguarding',  templateUrl: 'views/forms/safeguarding.html' })

    // medications
    .state('app.medications',    { url: '/patient/:id/medications',       templateUrl: 'views/medications.html' })
    .state('app.medicationList', { url: '/patient/:id/medications/list',  templateUrl: 'views/medications-list.html' })
    .state('app.medication',     { url: '/patient/:id/medication/:medId', templateUrl: 'views/medication.html' })
    .state('app.administer',     { url: '/patient/:id/administer/:medId', templateUrl: 'views/medication-administer.html' })

    // admissions forms
    .state('app.admit', { url: '/admit', templateUrl: 'views/admit.html' })
      .state('app.admit.dash', { url: '/dash', templateUrl: 'views/forms/admission.html' })
      // data
      .state('app.admit.data', { url: '/data', templateUrl: 'views/forms/sections/data.html' })
        .state('app.admit.nameAddress',        { url: '/name',      templateUrl: 'views/forms/components/nameAddress.html', controller: 'AdmissionController'})
        .state('app.admit.info',               { url: '/patient',   templateUrl: 'views/forms/components/patientInformation.html', controller: 'AdmissionController' })
        .state('app.admit.nextOfKin',          { url: '/nextOfKin', templateUrl: 'views/forms/components/nextOfKin.html', controller: 'AdmissionController' })
        .state('app.admit.siblings',           { url: '/siblings',  templateUrl: 'views/forms/components/siblings.html', controller: 'AdmissionController' })
      // observations
      .state('app.admit.observations', { url: '/obs', templateUrl: 'views/forms/components/obs.html' })
        .state('app.admit.obs1',   { url: '/obs1', templateUrl: 'views/forms/components/obs1.html' })
        .state('app.admit.obs2',   { url: '/obs2', templateUrl: 'views/forms/components/obs2.html' })
        .state('app.admit.obs3',   { url: '/obs3', templateUrl: 'views/forms/components/obs3.html' })
      // urine pain skin
      .state('app.admit.ups', { url: '/ups', templateUrl: 'views/forms/sections/urinePainSkin.html' })
        .state('app.admit.urine', { url: '/urine', templateUrl: 'views/forms/components/urinalysis.html' })
        .state('app.admit.pain',  { url: '/pain',  templateUrl: 'views/forms/components/painAssessment.html' })
        .state('app.admit.skin',  { url: '/skin',  templateUrl: 'views/forms/components/skinIntegrity.html' })
        .state('app.admit.skin2', { url: '/skin2', templateUrl: 'views/forms/components/skinIntegrity2.html' })
      // medical history
      .state('app.admit.medical', { url: '/medical', templateUrl: 'views/forms/sections/medicalHistory.html' })
        .state('app.admit.history',     { url: '/history',     templateUrl: 'views/forms/components/pastMedicalHistory.html' })
        .state('app.admit.allergies',   { url: '/allergies',   templateUrl: 'views/forms/components/allergies.html' })
        .state('app.admit.medications', { url: '/medications', templateUrl: 'views/forms/components/medication.html' })
      // living
      .state('app.admit.living', { url: '/living', templateUrl: 'views/forms/sections/living.html' })
        .state('app.admit.nutrition', { url: '/nutrition', templateUrl: 'views/forms/components/nutrition.html' })
        .state('app.admit.hygiene',   { url: '/hygiene',   templateUrl: 'views/forms/components/hygiene.html' })
        .state('app.admit.sleeping',  { url: '/sleeping',  templateUrl: 'views/forms/components/sleeping.html' })
      // development
      .state('app.admit.development', { url: '/development', templateUrl: 'views/forms/sections/development.html' })
        .state('app.admit.communication', { url: '/communication', templateUrl: 'views/forms/components/communication.html' })
        .state('app.admit.social',        { url: '/social',        templateUrl: 'views/forms/components/socialDevelopment.html' })
        .state('app.admit.mobility',      { url: '/mobility',      templateUrl: 'views/forms/components/mobility.html' })
      // safety
      .state('app.admit.safety', { url: '/safety', templateUrl: 'views/forms/sections/safety.html' })
        .state('app.admit.community',    { url: '/community',     templateUrl: 'views/forms/components/communityInvolvement.html' })
        .state('app.admit.safeguarding', { url: '/safeguarding',  templateUrl: 'views/forms/components/safeguardingChildren.html' })
        .state('app.admit.manual',       { url: '/manual',        templateUrl: 'views/forms/components/manualHandling.html' })
      // information
      .state('app.admit.information',    { url: '/information', templateUrl: 'views/forms/sections/information.html' })
      // decision
      .state('app.admit.decision',       { url: '/decision', templateUrl: 'views/forms/decisionToAdmit.html' });
});

