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
    angular.element(document).ready(function() {
      angular.bootstrap(document);
    });
  }
};
