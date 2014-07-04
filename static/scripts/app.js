(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ngRoute', 'firebase'])

.factory({
  resources: require('./services/resources'),
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  Staff: require('./services/Staff'),
  Auth: require('./services/Authentication'),
  NotificationCenter: require('./services/NotificationCenter')
})

.controller({
  AuthController: require('./controllers/AuthController'),
  DashController: require('./controllers/DashController'),
  AdmissionController: require('./controllers/AdmissionController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor'),
  systemBar: require('./directives/systemBar'),
  notificationsBar: require('./directives/notificationsBar'),
  radialProgress: require('./directives/radialProgress'),
  currentTime: require('./directives/currentTime')
})

.filter({
  date: require('./filters/date'),
  timeUntil: require('./filters/timeUntil')
})

.config(function($routeProvider) {
  $routeProvider

  // Home screen
  .when('/', {
    redirectTo: '/auth'
  })

  // Authentication screen
  .when('/auth', {
    templateUrl: '/views/authenticate.html',
    controller: 'AuthController'
  })

  // Aggregate/navigation view
  .when('/dash', {
    templateUrl: '/views/dash.html',
    controller: 'DashController'
  })

  // Patient specific
  .when('/patient/:id', {
    templateUrl: '/views/patient.html'
  })

  // Staff notes
  .when('/notes', {
    templateUrl: '/views/notes.html'
  })

  .when('/note/:id', {
    templateUrl: '/views/note.html'
  })

  // Note editor
  .when('/notes/edit', {
    templateUrl: '/views/editNote.html'
  })

  // Task list
  .when('/tasks', {
    templateUrl: '/views/tasks.html',
    controller: 'TaskController'
  })

  .when('/tasks/edit', {
    templateUrl: '/views/editTask.html'
  })

  // Async comms
  .when('/chat', {
    templateUrl: '/views/chat.html'
  })

  .when('/admission', {
    templateUrl: '/views/forms/admission.html',
    controller: 'AdmissionController'
  })

  // Admission data subsection
  .when('/admission/data', {
    templateUrl: '/views/forms/data.html'
  })

  // Admission observations subsection
  .when('/admission/observations', {
    templateUrl: '/views/forms/observations.html'
  })

  // Admission urine pain skin subsection
  .when('/admission/urinePainSkin', {
    templateUrl: '/views/forms/urinePainSkin.html'
  })

  // Admission medical history subsection
  .when('/admission/medicalHistory', {
    templateUrl: '/views/forms/medicalHistory.html'
  })

  // Admission living subsection
  .when('/admission/living', {
    templateUrl: '/views/forms/living.html'
  })

  // Admission development subsection
  .when('/admission/development', {
    templateUrl: '/views/forms/development.html'
  })

  // Admission safety subsection
  .when('/admission/safety', {
    templateUrl: '/views/forms/safety.html'
  })

  // Admissions info
  .when('/admission/info', {
    templateUrl: '/views/forms/info.html'
  })

  // Admission decision subsection 
  .when('/admission/decision', {
    templateUrl: '/views/forms/decision.html'
  })


  .otherwise({
    redirectTo: '/'
  });
})


},{"./controllers/AdmissionController":2,"./controllers/AuthController":3,"./controllers/DashController":4,"./directives/currentTime":5,"./directives/iconEditor":6,"./directives/notificationsBar":7,"./directives/radialProgress":8,"./directives/systemBar":9,"./directives/taskEditor":10,"./filters/date":11,"./filters/timeUntil":12,"./services/Authentication":15,"./services/Model":16,"./services/NotificationCenter":17,"./services/Patient":18,"./services/Staff":19,"./services/db":20,"./services/resources":21}],2:[function(require,module,exports){
module.exports = function($scope) {

};

},{}],3:[function(require,module,exports){
module.exports = function($scope, Auth) {
  $scope.id = '';
  $scope.error = false;

  $scope.submit = function() {
    Auth.authenticate($scope.id)
    .then(function() {
      console.log('hell');
      window.location.replace('#/dash');
    })
    .catch(function() {
      $scope.error = true;
      $scope.$apply();
    });
  };
}

},{}],4:[function(require,module,exports){
module.exports = function($scope, $firebase, Auth) {
  var profile = Auth.getProfile();

  if(!profile) {
    console.error('Not signed in');
    window.location.replace('#/auth');
  }

  $scope.staff = $firebase(profile);
};

},{}],5:[function(require,module,exports){
module.exports = function($interval, $filter) {
  return {
    restrict: 'A',
    scope: {
      'currentTime': '@currentTime'
    },
    link: function(scope, element, attributes) {
      var filter, template, named;

      template = scope.currentTime || 'h:m:s';
      filter = $filter('date');
      named = 'named' in attributes;

      $interval(function() {
        element.html(filter(Date.now(), template, named));
      }, 1000);
    }
  }
};

},{}],6:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/iconEditor.html',
    scope: {
      icon: '=icon'
    },
    controller: function($scope, resources) {
      $scope.resources = resources;

      $scope.icon.glyph = $scope.icon.glyph || resources.icons.__default__;
      $scope.icon.color = $scope.icon.color || resources.colors.__default__;

      $scope.changeGlyph = function(glyph) {
        $scope.icon.glyph = glyph;
      };

      $scope.changeColor = function(color) {
        $scope.icon.color = color;
      };
    }
  }
}

},{}],7:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/notificationsBar.html',
    controller: function($scope, NotificationCenter) {
      $scope.notifications = [];
      $scope.types = {
        notifications: 'fa fa-bell',
        tasks: 'fa fa-tasks',
        chat: 'fa fa-envelope-o',
        steam: 'fa fa-fire'
      };

      $scope.type = function(type) {
        return $scope.notifications.filter(function(noti) {
          return noti.type === type;
        });
      };

      $scope.count = function(type) {
        return $scope.type.apply(this, arguments).length;
      };
    }
  }
};

},{}],8:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: '/partials/radialProgress.html',
    scope: {
      radialProgress: '=radialProgress'
    },
    link: function(scope, element, attributes) {
      // Cap so that right will render correctly
      scope.degrees = function(cap) {
        var deg = scope.radialProgress * 360;
        if(deg > 180 && cap) deg = 180;
        return deg;
      }
    }
  }
};

},{}],9:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/systemBar.html'
  }
};

},{}],10:[function(require,module,exports){
module.exports = function(TaskFactory) {
  return {
    restrict: 'A',

    templateUrl: '/partials/taskEditor.html',

    controller: function($scope, resources) {

      $scope.resources = resources;
      console.log(TaskFactory.editableTask);
      
      if(TaskFactory.editableTask) {
        $scope.task = TaskFactory.editableTask;
      } else {
        // task model
        $scope.task = {
          title: '',
          icon: {
            glyph: resources.icons.__default__,
            color: resources.colors.__default__
          },
          description: '',
          duration: 0
        };
      }
      $scope.create = function() {
        // create the task
        TaskFactory.createTask($scope.task);
        TaskFactory.flushEdit();
        window.location.replace('#/tasks');
      };

      $scope.cancel = function() {
        // return to previous view
        window.location.replace('#/tasks');
      };

    }
  }
}

},{}],11:[function(require,module,exports){
module.exports = function() {
  return function(seconds, template, named) {
    var date, names, components;

    seconds = parseInt(seconds);
    date = new Date(seconds);
    template = template || 'h:m:s';

    names = {
      months: ['Jan', 'Feb', 'March', 'April', 'May', 'June',
        'July', 'Aug', 'Oct', 'Nov', 'Dec'],
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };

    components = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      date: date.getDate(),
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getYear() + 1900
    }

    if(named) {
      components.day = names.days[date.getDay()];
      components.month = names.months[date.getMonth()];
    }
    if(components.minutes < 10) {
      components.minutes = '0' + components.minutes;
    }
    if(components.seconds < 10) {
      components.seconds = '0' + components.seconds;
    }

    return template
    .replace('h', components.hours)
    .replace('m', components.minutes)
    .replace('s', components.seconds)
    .replace('d', components.day)
    .replace('D', components.date)
    .replace('M', components.month)
    .replace('Y', components.year);
  }
}

},{}],12:[function(require,module,exports){
module.exports = function() {
  return function(due) {
    return due - Date.now();
  }
};

},{}],13:[function(require,module,exports){
module.exports={
  "__default__": "#555",
  "black": "#3b3b3b",
  "red": "#cf6a4c",
  "green": "#99ad6a",
  "yellow": "#d8ad4c",
  "blue": "#597bc5",
  "purple": "#a037b0",
  "cyan": "#71b9f8"
}

},{}],14:[function(require,module,exports){
module.exports={
  "__default__": "fa fa-circle",
  "ambulance": "fa fa-ambulance",
  "hospital": "fa fa-hospital-o",
  "medkit": "fa fa-medkit",
  "plus": "fa fa-plus-square",
  "stethoscope": "fa fa-stethoscope",
  "staff": "fa fa-user-md",
  "wheelchair": "fa fa-wheelchair",
  "document": "fa fa-file-o",
  "patient": "fa fa-user",
  "patients": "fa fa-users",
  "star": "fa fa-star",
  "heart": "fa fa-heart",
  "steam": "fa fa-fire",
  "coffee": "fa fa-coffee",
  "clock": "fa fa-clock-o",
  "chart": "fa fa-bar-chart-o"
}

},{}],15:[function(require,module,exports){
module.exports = function($q, Staff) {
  var profile = null;

  function authenticate(id) {
    var deferred = $q.defer();

    Staff.fromDb(id)
    .on('value', function(snapshot) {
      profile = snapshot.val();

      // profile will be null if does not exist
      if(profile) {
        authenticated = true;
        deferred.resolve(profile);
      } else {
        deferred.reject(profile);
      }
    });

    return deferred.promise;
  }

  function getProfile() {
    return profile;
  }

  return {
    authenticate: authenticate,
    getProfile: getProfile
  }
};

},{}],16:[function(require,module,exports){
module.exports = function(db) {
  return function(name) {
    function fromDb(id) {
      return db.child(name)
      .child(id);
    }

    return {
      fromDb: fromDb
    }
  }
}

},{}],17:[function(require,module,exports){
module.exports = function() {
  var notifications = [];

  function notify(notification) {
    notifications.push(notification);
  }

  function subscribe(type, handler) {
    notifications.on('change', function(noti) {
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

},{}],18:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('patients');
}

},{}],19:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('staff');
};

},{}],20:[function(require,module,exports){
module.exports = function() {
  return new Firebase('https://astralchai.firebaseio.com');
};

},{}],21:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":13,"../resources/icons.json":14}]},{},[1])