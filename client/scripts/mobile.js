window.app = {
  initialize: function() {
    this.bindEvents();
    console.log('Bind events');
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
