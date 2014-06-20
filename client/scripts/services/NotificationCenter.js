module.exports = function() {
  var notifications = [];

  function notify(notification) {
    notifications.push(notification);
    console.log(notification);
  }

  function subscribe(type, handler) {
    notifications.on('change', function() {
      // get last element 
      if(noti.type === type) {
        handler(noti);
      }
    });
  }

  return {
    notifications: notifications,
    notify: notify,
    subscribe: subscribe
  }
};
