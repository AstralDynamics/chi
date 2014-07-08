(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./modules/EventEmitter.js');

angular.module('chai', ['ngRoute', 'EventEmitter', 'firebase'])

.factory({
  resources: require('./services/resources'),
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientIncubator: require('./services/PatientIncubator'),
  PatientTemplate: require('./services/PatientTemplate'),
  Node: require('./services/Node'),
  ProgressTree: require('./services/ProgressTree'),
  Staff: require('./services/Staff'),
  Auth: require('./services/Authentication'),
  Notify: require('./services/NotificationCenter'),
  timeOfDay: require('./services/timeOfDay')
})

.controller({
  AuthController: require('./controllers/AuthController'),
  DashController: require('./controllers/DashController'),
  AdmissionController: require('./controllers/AdmissionController'),
  PatientsController: require('./controllers/PatientsController'),
  PatientController: require('./controllers/PatientController')
})

.directive({
  taskEditor: require('./directives/taskEditor'),
  iconEditor: require('./directives/iconEditor'),
  systemBar: require('./directives/systemBar'),
  notificationsBar: require('./directives/notificationsBar'),
  radialProgress: require('./directives/radialProgress'),
  currentTime: require('./directives/currentTime'),
  ngPredict: require('./directives/ngPredict'),
  progressNode: require('./directives/progressNode'),
  timeInput: require('./directives/timeInput'),
  modal: require('./directives/modal'),
  modalManager: require('./directives/modalManager')
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
    templateUrl: './views/authenticate.html',
    controller: 'AuthController'
  })

  // Aggregate/navigation view
  .when('/dash', {
    templateUrl: './views/dash.html',
    controller: 'DashController'
  })

  // Patient list
  .when('/patients', {
    templateUrl: './views/patients.html',
    controller: 'PatientsController'
  })

  // Patient specific
  .when('/patient/:id', {
    templateUrl: './views/patient.html',
    controller: 'PatientController'
  })

  // Staff notes
  .when('/notes', {
    templateUrl: './views/notes.html'
  })

  .when('/note/:id', {
    templateUrl: './views/note.html'
  })

  // Note editor
  .when('/notes/edit', {
    templateUrl: './views/editNote.html'
  })

  // Task list
  .when('/tasks', {
    templateUrl: './views/tasks.html',
    controller: 'TaskController'
  })

  .when('/tasks/edit', {
    templateUrl: './views/editTask.html'
  })

  // Async comms
  .when('/chat', {
    templateUrl: './views/chat.html'
  })

  .when('/admission', {
    templateUrl: './views/forms/admission.html',
    controller: 'AdmissionController'
  })

  // Admission data subsection
  .when('/admission/data', {
    templateUrl: './views/forms/sections/data.html'
  })

  // Admission observations subsection
  .when('/admission/observations', {
    templateUrl: './views/forms/sections/observations.html'
  })

  // Admission urine pain skin subsection
  .when('/admission/urinePainSkin', {
    templateUrl: './views/forms/sections/urinePainSkin.html'
  })

  // Admission medical history subsection
  .when('/admission/medicalHistory', {
    templateUrl: './views/forms/sections/medicalHistory.html'
  })

  // Admission living subsection
  .when('/admission/living', {
    templateUrl: './views/forms/sections/living.html'
  })

  // Admission development subsection
  .when('/admission/development', {
    templateUrl: './views/forms/sections/development.html'
  })

  // Admission safety subsection
  .when('/admission/safety', {
    templateUrl: './views/forms/sections/safety.html'
  })


  // Patient Data
  // ------------
  // Form components from patient data
  .when('/admission/components/nameAddress', {
    templateUrl: './views/forms/components/nameAddress.html'
  })
  .when('/admission/components/patientInformation', {
    templateUrl: './views/forms/components/patientInformation.html'
  })
  .when('/admission/components/nextOfKin', {
    templateUrl: './views/forms/components/nextOfKin.html'
  })
  .when('/admission/components/siblings', {
    templateUrl: './views/forms/components/siblings.html'
  })


  // Development
  // ------------
  // Form components for development
  .when('/admission/components/communication', {
    templateUrl: './views/forms/components/communication.html'
  })
  .when('/admission/components/socialDevelopment', {
    templateUrl: './views/forms/components/socialDevelopment.html'
  })
  .when('/admission/components/mobility', {
    templateUrl: './views/forms/components/mobility.html'
  })


  // Observations
  // ------------
  // Form components for obs
  .when('/admission/components/obs1', {
    templateUrl: './views/forms/components/obs1.html'
  })
  .when('/admission/components/obs2', {
    templateUrl: './views/forms/components/obs2.html'
  })
  .when('/admission/components/obs3', {
    templateUrl: './views/forms/components/obs3.html'
  })


  // Urine/Pain/Skin
  // ---------------
  // Form components for UPS
  .when('/admission/components/urinalysis', {
    templateUrl: './views/forms/components/urinalysis.html'
  })
  .when('/admission/components/painAssessment', {
    templateUrl: './views/forms/components/painAssessment.html'
  })
  .when('/admission/components/skinIntegrity', {
    templateUrl: './views/forms/components/skinIntegrity.html'
  })
  .when('/admission/components/skinIntegrity2', {
    templateUrl: './views/forms/components/skinIntegrity2.html'
  })


  // Medical History
  // ---------------
  // Form components for Medical History
  .when('/admission/components/medicalHistory', {
    templateUrl: './views/forms/components/pastMedicalHistory.html'
  })
  .when('/admission/components/allergies', {
    templateUrl: './views/forms/components/allergies.html'
  })
  .when('/admission/components/medication', {
    templateUrl: './views/forms/components/medication.html'
  })
  .when('/admission/components/listOfMeds', {
    templateUrl: './views/forms/components/listOfMeds.html'
  })


  // Living
  // ------
  // Form components for Living Forms
  .when('/admission/components/nutrition', {
    templateUrl: './views/forms/components/nutrition.html'
  })
  .when('/admission/components/hygiene', {
    templateUrl: './views/forms/components/hygiene.html'
  })
  .when('/admission/components/sleeping', {
    templateUrl: './views/forms/components/sleeping.html'
  })

  // Safety
  // ------
  // Form components for Living Forms
  .when('/admission/components/communityInvolvement', {
    templateUrl: './views/forms/components/communityInvolvement.html'
  })
  .when('/admission/components/safeguardingChildren', {
    templateUrl: './views/forms/components/safeguardingChildren.html'
  })
  .when('/admission/components/manualHandling', {
    templateUrl: './views/forms/components/manualHandling.html'
  })

  // Admission
  // ---------
  .when('/admission/components/info', {
    templateUrl: './views/forms/components/infoChecklist.html'
  })
  .when('/admission/components/decision', {
    templateUrl: './views/forms/decisionToAdmit.html'
  })

  .otherwise({
    redirectTo: '/'
  });
})


},{"./controllers/AdmissionController":2,"./controllers/AuthController":3,"./controllers/DashController":4,"./controllers/PatientController":5,"./controllers/PatientsController":6,"./directives/currentTime":7,"./directives/iconEditor":8,"./directives/modal":9,"./directives/modalManager":10,"./directives/ngPredict":11,"./directives/notificationsBar":12,"./directives/progressNode":13,"./directives/radialProgress":14,"./directives/systemBar":15,"./directives/taskEditor":16,"./directives/timeInput":17,"./filters/date":18,"./filters/timeUntil":19,"./modules/EventEmitter.js":20,"./services/Authentication":23,"./services/Model":24,"./services/Node":25,"./services/NotificationCenter":26,"./services/Patient":27,"./services/PatientIncubator":28,"./services/PatientTemplate":29,"./services/ProgressTree":30,"./services/Staff":31,"./services/db":32,"./services/resources":33,"./services/timeOfDay":34}],2:[function(require,module,exports){
module.exports = function($scope, PatientIncubator, Patient) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.admit = function() {
    var patient = $scope.patient;
    console.log('Admitting new patient');

    // Duplicate fields for future lookup
    patient.ward = 'AAU';
    patient.bed = '-';
    patient.age = patient.admission.data.age;
    patient.pew = 0;
    patient.nurse = '-';
    patient.gender = patient.admission.data.gender;
    patient.name = patient.admission.data.forename + ' ' +
      patient.admission.data.surname;

    Patient.save(patient);
  };


  // Data for community forms
  $scope.community = {
    member: ''
  };

  // Data for sibling input
  $scope.selectedSibling = -1;
  $scope.addSibling = function() {
    $scope.patient.admission.data.siblings.push({
      name: 'Name',
      gender: '',
      age: '',
      info: ''
    })
  };

  // Data for allergy input
  $scope.selectedAllergy = -1;
  $scope.addAllergy = function() {
    console.log('add allergy');
    $scope.patient.admission.medicalHistory.allergies.push({
      allergen: 'Allergen',
      reaction: '',
      corrective: ''
    });
  };

};

},{}],3:[function(require,module,exports){
module.exports = function($scope, Auth) {
  $scope.id = '';
  $scope.error = false;
  console.log('Auth controller loading');

  $scope.submit = function() {
    Auth.authenticate($scope.id)
    .then(function() {
      console.log('Signed in');
      window.location.replace('#/dash');
    })
    .catch(function() {
      console.error('Could not sign in');
      $scope.error = true;
      $scope.$apply();
    });
  };
}

},{}],4:[function(require,module,exports){
module.exports = function($scope, $firebase, Auth, Patient, Notify, timeOfDay) {

  $scope.init = function() {
    var profile = Auth.getProfile();

    if(!profile) {
      console.error('Not signed in');
      window.location.replace('#/auth');
      return;
    }

    $scope.patients = $firebase(Patient.getAll());
    console.log('profile', profile);
    //$scope.staff = $firebase(profile);
    console.log('type', typeof profile);
    $scope.staff = profile;
    console.log('$profile', $firebase(profile));
  }

  $scope.timeOfDay = timeOfDay;
  function isIt(phase) {
    return function() {
      return $scope.timeOfDay() === phase;
    }
  }
  $scope.morning = isIt('Morning');
  $scope.afternoon = isIt('Afternoon');
  $scope.evening = isIt('Evening');
  $scope.night = isIt('Night');

};


},{}],5:[function(require,module,exports){
module.exports = function($scope, $routeParams, $firebase, Patient) {
  var patientId = $routeParams.id;
  $scope.patient = $firebase(Patient.fromDb(patientId));

  console.log($scope.patient);
};

},{}],6:[function(require,module,exports){
module.exports = function($scope, $firebase, Patient) {
  $scope.patients = $firebase(Patient.getAll());

  console.log($scope.patients);
};

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/iconEditor.html',
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

},{}],9:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/modal.html',
    scope: {
      modal: '=modal'
    },
    controller: function($scope) {
    }
  }
};

},{}],10:[function(require,module,exports){
module.exports = function(Notify) {
  return {
    restrict: 'A',
    templateUrl: 'partials/modalManager.html',
    controller: function($scope) {
      $scope.modals = [];

      Notify.on('modal', function(modal) {
        console.log(modal);
        $scope.modals.push(modal);
      });
    }
  }
};

},{}],11:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    template: '<div class="predict">' +
                '<div ng-transclude></div>' +
                '<div class="suggestions" ng-show="suggestions.length">' +
                  '<div class="suggestion"' +
                    'ng-repeat="suggestion in suggestions">' +
                    '<div ng-bind="suggestion" ng-click="use(suggestion)"></div>' +
                  '</div>' +
                '</div>' +
              '</div>',
    transclude: true,
    scope: {
      dictionary: '=ngPredict'
    },

    link: function(scope, element, attributes) {
      element.on('change', function() {
        scope.predict(element.val());
      });
    },

    controller: function($scope, $element) {
      $scope.suggestions = ['hello'];

      // Use the suggestion
      $scope.use = function(word) {
        $element.val(word);
        $scope.suggestions = [];
      };

      $scope.predict = function(seed) {
        if(seed.length == 0) {
          return [];
        }

        $scope.suggestions = $scope.dictionary.filter(function(word) {
          return word.startsWith(seed);
        });
      };
    }
  }
}

},{}],12:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/notificationsBar.html',
    controller: function($scope, Notify) {
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

},{}],13:[function(require,module,exports){
module.exports = function(ProgressTree) {
  return {
    restrict:'A',
    scope: {
      readLinks: '&nodeLinks',
      value: '=nodeValue'
    },
    link: function(scope, element, attrs) {
      var name, links;

      // don't try to evaluate
      name = attrs.nodeName;

      // evaluate as array of strings
      links = scope.readLinks();

      scope.node = ProgressTree.createNode(name, links, scope.value);
    }
  }
};

},{}],14:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'partials/radialProgress.html',
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

},{}],15:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/systemBar.html'
  }
};

},{}],16:[function(require,module,exports){
module.exports = function(TaskFactory) {
  return {
    restrict: 'A',

    templateUrl: 'partials/taskEditor.html',

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

},{}],17:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/timeInput.html',
    require: '?ngModel',
    scope: {
      readFormat: '&timeFormat'
    },
    link: function(scope, element, attrs, ngModel) {
      var format = scope.readFormat() || 'mm:hh';

      scope.minutes;
      scope.hours;

      // TODO find out why ngModel is not provided

      scope.change = function() {
        ngModel.$setViewValue(scope.format());
      };

      scope.format = function() {
        return format
        .replace('mm', minutes)
        .replace('hh', hours)
      };

      scope.currentTime = function() {
        var date = new Date();
        scope.minutes = date.getMinutes();
        scope.hours = date.getHours();
      };
    }
  }
};

},{}],18:[function(require,module,exports){
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

    var templated, index;
    templated = [];
    for(index = 0; index < template.length; index++) {
      switch(template[index]) {
        case 'h':
          templated.push(components.hours);
          break;
        case 'm':
          templated.push(components.minutes);
          break;
        case 's':
          templated.push(components.seconds);
          break;
        case 'd':
          templated.push(components.day);
          break;
        case 'D':
          templated.push(components.date);
          break;
        case 'M':
          templated.push(components.month);
          break;
        case 'Y':
          templated.push(components.year);
          break;
        default:
          templated.push(template[index]);
      }
    }

    return templated.join('');
  }
}

},{}],19:[function(require,module,exports){
module.exports = function() {
  return function(due) {
    return due - Date.now();
  }
};

},{}],20:[function(require,module,exports){
angular.module('EventEmitter', [])

.factory('$emitter', function() {
  return function() {
    var events = {};

    // Helper method for registering an event
    function _register(name) {
      var handlers;
      if(name in events && events[name] instanceof Array) {
        handlers = events[name]; 
      } else {
        handlers = events[name] = [];
      }
      return handlers;
    }

    // Add an event listener
    function on(name, handler) {
      var handlers = _register(name);
      handlers.push(handler);
    }

    // Remove an event listener
    function off(name, handler) {
      var handlers, index;
      handlers = _register(name);
      index = handlers.indexOf(handler);
      handlers.splice(index, 1);
    }

    // Emit a new event
    function emit(name, data) {
      var args, index, handlers;

      handlers = _register(name);
      args = [].slice.call(arguments, 1);
      for(index = 0; index < handlers.length; index++) {
        handlers[index].apply(null, args);
      }
    }

    return {
      on: on,
      off: off,
      emit: emit
    }
  }
});

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
module.exports = function($rootScope, $q, Staff) {
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

},{}],24:[function(require,module,exports){
module.exports = function(db) {
  return function(name) {
    var root = db.child(name);

    function fromDb(id) {
      return root.child(id);
    }

    function save(model) {
      root.push(model);
    }

    function getAll() {
      console.log(root);
      return root;
    }

    return {
      fromDb: fromDb,
      save: save,
      getAll: getAll
    }
  }
}

},{}],25:[function(require,module,exports){
module.exports = function() {

  function Node(name, value, links) {
    this.name = name || '__default__';
    this.value = value || 0;
    this.links = links || [];
  };

  // Updates the node's value
  Node.prototype.update = function(value) {
    console.log('Updating node value', this);
    this.value = value;
  };

  // Traverses the tree, passes every discovered
  // node to a callback
  Node.prototype.traverse = function(callback) {
    console.log('Traversing node', this);
    var args = arguments;
    this.links.forEach(function(node) {
      callback(node);
      node.traverse.apply(node, args);
    });
  };

  // Sums values of all nodes in the tree
  Node.prototype.aggregate = function() {
    var index, node;

    console.log('Aggregating node', this);
    console.log('Links', this.links);

    for(index = 0; index < this.links.length; index++) {
      node = this.links[index];
      console.log('each', node.name, node.aggregate());
      this.value += node.aggregate() / this.links.length;
      console.log('value', node.aggregate(), this.links.length);
    }
    return this.value;
  };

  return Node;
}

},{}],26:[function(require,module,exports){
module.exports = function($emitter) {
  var events = new $emitter();

  return {
    on: events.on,
    emit: events.emit
  }
};

},{}],27:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('patients');
}

},{}],28:[function(require,module,exports){
module.exports = function(PatientTemplate) {
  var patient = null;

  function retrieve() {
    if(!patient) {
      create();
    }
    return patient;
  }

  function create() {
    patient = new PatientTemplate();
  }

  function done() {
    patient = null;
  }

  return {
    retrieve: retrieve,
    create: create,
    done: done
  }
};

},{}],29:[function(require,module,exports){
module.exports = function() {
  return function() {
    return {

      ward: '',
      bed: '',
      name: '',
      age: '',
      pew: '',
      nurse: '',

      admission: {

        data: {
          forename: '',
          surname: '',
          preferred: '',
          address: '',
          postcode: '',
          unitNumber: '',
          consultant: '',
          dateOfBirth: '',
          age: '',
          gender: '',
          religion: '',
          preferredLanguage: '',
          interpreterRequired: false,
          nextOfKin: '',
          relationship: '',
          homeTelephone: '',
          mobileTelephone: '',
          otherContactTelephone: '',
          siblings: []
        },

        observations: {
          temperature: '',
          pulse: '',
          respirations: '',
          weight: '',
          bloodPressure1: '',
          bloodPressure2: '',
          o2SatsAir: '',
          o2SatsLitres: '',
          bloodSugar: '',
          capillaryRefillLt2s: false,
          peakFlow: '',
          avpu: 'a',
          pearl: false,
          height: ''
        },

        urinalysis: {
          type: '',
          wardTestResult: '',
          leucocytesPresent: false,
          nitratesPresent: false,
          sentForMc: false,
          repeatSample: false
        },

        pain: {
          painFree: true,
          painLevel: 1,
          painScore: '',
          time: '',
          intervention: '',
          painPrior: false,
          problemIdentified: false
        },

        skinIntegrity: {
          intact: true,
          rashes: false,
          rashDescription: '',
          cutsOrGrazes: false,
          cutsDescription: '',
          bruises: false,
          bruiseDescription: '',
          pressureSores: false,
          pressureSoresDescription: '',
          infestations: false,
          infestationDescription: '',
          maelorScore: '',
          specialMattress: false,
          problemIdentified: false
        },

        medicalHistory: {
          ongoingProblems: '',
          immunisationsUpToDate: true,
          hasAllergies: false,
          allergies: []
        },

        medication: {
          recent: {
            prescribed: '',
            dose: '',
            strength: '',
            lastGiven: '',
            frequency: ''
          },
          regular: {
            prescribed: '',
            dose: '',
            strength: '',
            lastGiven: '',
            frequency: ''
          }
        },

        nutrition: {
          breastFed: false,
          bottleFed: false,
          dummy: false,
          feederBeaker: false,
          feedingAssistance: false,
          usualDietaryIntake: '',
          alteredDiet: '',
          specialDiet: '',
          problemIdentified: false
        },

        hygiene: {
          washingDressing: false,
          dependent: false,
          needsAssistance: false,
          independent: false,
          usesNappies: false,
          toiletTraining: false,
          continentDay: false,
          continentNight: false,
          normalPattern: '',
          alteredPattern: '',
          problemIdentified: false
        },

        sleeping: {
          cot: false,
          bed: false,
          pillows: false,
          timeSettles: '',
          timeWakes: '',
          naps: false,
          napsWhen: '',
          normalPattern: '',
          alteredPattern: '',
          bedrailsAssessment: false,
          bedrailsReason: '',
          problemIdentified: false
        },

        communication: {
          speech: false,
          speechDetails: '',
          hearing: false,
          hearingDetails: '',
          vision: false,
          visionDetails: ''
        },

        social: {
          concerned: false,
          details: '',
          toysHobbies: ''
        },

        mobility: {
          crawling: false,
          walking: false,
          needsAssistance: false,
          unableToWalk: false,
          wheelChair: false,
          normalAbility: '',
          alteredAbility: ''
        },

        community: {
          gp: {},
          healthVisitor: {},
          midwife: {},
          socialWorker: {},
          camhs: {},
          comChildNurse: {},
          lookedAfterChild: {},
          youthWorker: {},
          other: {},
          schoolName: '',
          nurseryName: ''
        },

        safeguardingChildren: {
          concerns: false,
          registerCheck: false,
          parentInformed: false,
          socialServicesContacted: false,
          parentInformedSocialServices: false,
          nurseSafeguarding: false,
          problemIdentified: false
        },

        manualHandling: {
          riskOfInjury: false,
          problemIdentified: false,
        },

        information: {

        }

      }
    }
  }
};

},{}],30:[function(require,module,exports){
module.exports = function(Node) {
  var nodes = [];

  function createNode(name, links, value) {
    links = links || [];
    if(!nodes[name]) {
      nodes[name] = new Node(name, value, links.map(function(link) {
        return createNode(link, []);
      }));
    }
    return nodes[name];
  }

  return {
    createNode: createNode
  }
};

},{}],31:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('staff');
};

},{}],32:[function(require,module,exports){
module.exports = function() {
  return new Firebase('https://astralchai.firebaseio.com');
};

},{}],33:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":21,"../resources/icons.json":22}],34:[function(require,module,exports){
module.exports = function() {
  return function() {
    var hours, time;
    hours = new Date().getHours();

    // 6 - 12 Morning
    // 12 - 16 Afternoon
    // 16 - 22 Evening
    // 22 - 6 Night

    time = 'Night';

    if(hours >= 6) {
      time = 'Morning';
    }

    if(hours >= 12) {
      time = 'Afternoon';
    }

    if(hours >= 16) {
      time = 'Evening';
    }

    if(hours >= 22) {
      time = 'Night';
    }

    return time;
  }
}

},{}]},{},[1])