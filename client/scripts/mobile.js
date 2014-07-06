window.app = {
  initialize: function() {
    this.bindEvents();
    console.log('Bind events');
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, true);
  },
  onDeviceReady: function() {
    console.log('Device is ready');
    document.write('Device ready bitches');
    angular.element(document).ready(function() {
      angular.bootstrap(document);
    });
  }
};
