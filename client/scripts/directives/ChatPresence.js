module.exports = function(Chat) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on('keydown', function() {
        Chat.isTyping();  
      });

    }
  }
};
