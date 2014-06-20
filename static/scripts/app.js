(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider

  // Home screen
  .when('/', {
    templateUrl: '/views/index.html'
  })

  // Patients and staff
  .when('/patients', {
    templateUrl: '/views/patients.html'
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

.constant({
})

.factory({
  TaskFactory: require('./services/TaskFactory'),
  resources: require('./services/resources')
})

.controller({
  TaskController: require('./controllers/TaskController'),
  PatientController: require('./controllers/PatientController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor')
});


},{"./controllers/PatientController":2,"./controllers/TaskController":3,"./directives/iconEditor":4,"./directives/taskEditor":5,"./services/TaskFactory":8,"./services/resources":9}],2:[function(require,module,exports){
module.exports = function($scope, $routeParams) {
  var patientId = $routeParams.id;

};

},{}],3:[function(require,module,exports){
module.exports = function($scope, TaskFactory) {

  $scope.selected;
  $scope.tasks = TaskFactory.tasks;
  console.log($scope.tasks);

  $scope.edit = function() {
    // edit the selected task
  };

  $scope.cancel = function() {
    // hide the selected task
  };

  $scope.create = function() {
    // switch to task creation view
  };


};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports = function(TaskFactory) {
  return {
    restrict: 'A',

    templateUrl: '/partials/taskEditor.html',

    controller: function($scope, resources) {

      $scope.resources = resources;

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

      $scope.create = function() {
        // create the task
        TaskFactory.createTask($scope.task);
        window.location.replace('#/tasks');
      };

      $scope.cancel = function() {
        // return to previous view
        window.location.replace('#/tasks');
      };

    }
  }
}

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
module.exports = function(resources) {
  var tasks = [];

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
      duration: task.duration,
      hidden: false,
      date: Date.now()
    };

    tasks.push(task);
    console.log(tasks);
    // put the task into firebase
  }

  return {
    createTask: createTask,
    tasks: tasks
  }
}

},{}],9:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":6,"../resources/icons.json":7}]},{},[1])