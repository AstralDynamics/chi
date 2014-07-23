// This script should be loaded and used 
// with mobile devices.
window.mobile = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, true);
  },
  onDeviceReady: function() {

    // load phonegap script
    var script = document.createElement('script');
    script.src = 'phonegap.js';
    document.head.appendChild(script);

    // bootstrap angular
    angular.element(document).ready(function() {
      angular.bootstrap(document);
    });
  }
};
