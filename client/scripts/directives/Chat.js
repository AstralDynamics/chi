module.exports = function(Chat) {
  return {
    restrict: 'A',
    templateUrl: '/partials/chat',
    controller: 'ChatController',
    link: function() {
      console.log('ere');
    }
  }
}
