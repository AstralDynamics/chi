(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])