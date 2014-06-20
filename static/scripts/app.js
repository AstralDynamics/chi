(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ngRoute', 'firebase'])

.factory({
  TaskFactory: require('./services/TaskFactory'),
  NotificationCenter: require('./services/NotificationCenter'),
  resources: require('./services/resources')
})

.controller({
  TaskController: require('./controllers/TaskController'),
  PatientController: require('./controllers/PatientController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor'),
  systemBar: require('./directives/systemBar'),
  notificationsBar: require('./directives/notificationsBar'),
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
    templateUrl: '/views/index.html'
  })

  // Patient specific
  .when('/patient/:id', {
    templateUrl: '/views/patient.html',
    controller: 'PatientController'
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

  .otherwise({
    redirectTo: '/'
  });
})


},{"./controllers/PatientController":2,"./controllers/TaskController":3,"./directives/currentTime":4,"./directives/iconEditor":5,"./directives/notificationsBar":6,"./directives/systemBar":7,"./directives/taskEditor":8,"./filters/date":9,"./filters/timeUntil":10,"./services/NotificationCenter":13,"./services/TaskFactory":14,"./services/resources":15}],2:[function(require,module,exports){
module.exports = function($scope, $routeParams) {
  var patientId = $routeParams.id;

};

},{}],3:[function(require,module,exports){
module.exports = function($scope, TaskFactory) {

  $scope.selected = -1;
  $scope.tasks = TaskFactory.tasks;

  $scope.now = Date.now.bind(Date);

  // Calculate the time at which a
  // task is due
  $scope.radarPercent = function(due) {
    var shift = 18000000;
    return Math.floor((due / (Date.now() + shift)) * 100);
  };

  $scope.percentComplete = function(task) {
    var time;
    time = (task.due - Date.now()) / (task.due - task.date) * 100;
    return Math.floor(time);
  };

  $scope.toggleSelection = function(index) {
    if($scope.selected !== index) {
      $scope.selected = index;
    } else {
      $scope.selected = -1;
    }
  };

  $scope.getSelected = function() {
    return $scope.tasks[$scope.selected];
  };

  $scope.edit = function() {
    // edit the selected task
    console.log('edit');
    TaskFactory.editTask($scope.getSelected());
    window.location.replace('#/tasks/edit');
  };

  $scope.cancel = function() {
    // hide the selected task
    $scope.getSelected().hidden = true;
  };

  $scope.complete = function() {
    
  };

  $scope.create = function() {
    // switch to task creation view
  };


};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/systemBar.html'
  }
};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
module.exports = function() {
  return function(due) {
    return due - Date.now();
  }
};

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
module.exports = function(NotificationCenter, resources) {
  var tasks, editableTask;

  tasks = [];

  function createTask(task) {
    var defaults, task;

    defaults = {
      title: 'Untitled task',
      icon: resources.icons.__default__,
      color: resources.colors.__default__
    };

    task = {
      title: task.title || defaults.title,
      description: task.description,
      icon: task.icon || defaults.icon,
      color: task.color || defaults.color,
      duration: parseInt(task.duration),
      hidden: false,
      date: Date.now(),
      due: Date.now() + parseInt(task.duration)
    };

    tasks.push(task);
    NotificationCenter.notify({
      type:'task'
    });

    // put the task into firebase
  }

  function editTask(task) {
    editableTask = task;
  }

  function flushEdit() {
    editableTask = null;
  }

  return {
    createTask: createTask,
    editTask: editTask,
    flushEdit: flushEdit,
    tasks: tasks,
    editableTask: editableTask
  }
}

},{}],15:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":11,"../resources/icons.json":12}]},{},[1])