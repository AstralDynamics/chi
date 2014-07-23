(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ui.router'])

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
    .state('app.messages', { url: '/messages',    templateUrl: 'views/messages.html' })
    .state('app.tasks',    { url: '/tasks',       templateUrl: 'views/tasks.html' })
    .state('app.admit',    { url: '/admit',       templateUrl: 'views/forms/admission.html' })
      .state('app.admit.data',           { url: '/admit', templateUrl: 'views/forms/sections/data.html' })
      .state('app.admit.decision',       { url: '/admit', templateUrl: 'views/forms/sections/decision.html' })
      .state('app.admit.development',    { url: '/admit', templateUrl: 'views/forms/sections/development' })
      .state('app.admit.information',    { url: '/admit', templateUrl: 'views/forms/sections/information.html' })
      .state('app.admit.medicalHistory', { url: '/admit', templateUrl: 'views/forms/sections/medicalHistory.html' })
      .state('app.admit.safety',         { url: '/admit', templateUrl: 'views/forms/sections/safety.html' })
      .state('app.admit.urinePainSkin',  { url: '/admit', templateUrl: 'views/forms/sections/urinePainSkin.html' });

});


},{}]},{},[1])