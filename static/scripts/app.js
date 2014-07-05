(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ngRoute', 'firebase'])

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
  currentTime: require('./directives/currentTime'),
  ngPredict: require('./directives/ngPredict'),
  progressNode: require('./directives/progressNode'),
  timeInput: require('./directives/timeInput')
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
    templateUrl: '/views/forms/sections/data.html'
  })

  // Admission observations subsection
  .when('/admission/observations', {
    templateUrl: '/views/forms/sections/observations.html'
  })

  // Admission urine pain skin subsection
  .when('/admission/urinePainSkin', {
    templateUrl: '/views/forms/sections/urinePainSkin.html'
  })

  // Admission medical history subsection
  .when('/admission/medicalHistory', {
    templateUrl: '/views/forms/sections/medicalHistory.html'
  })

  // Admission living subsection
  .when('/admission/living', {
    templateUrl: '/views/forms/sections/living.html'
  })

  // Admission development subsection
  .when('/admission/development', {
    templateUrl: '/views/forms/sections/development.html'
  })

  // Admission safety subsection
  .when('/admission/safety', {
    templateUrl: '/views/forms/sections/safety.html'
  })


  // Patient Data
  // ------------
  // Form components from patient data
  .when('/admission/components/nameAddress', {
    templateUrl: '/views/forms/components/nameAddress.html'
  })
  .when('/admission/components/patientInformation', {
    templateUrl: '/views/forms/components/patientInformation.html'
  })
  .when('/admission/components/nextOfKin', {
    templateUrl: '/views/forms/components/nextOfKin.html'
  })
  .when('/admission/components/siblings', {
    templateUrl: '/views/forms/components/siblings.html'
  })


  // Development
  // ------------
  // Form components for development
  .when('/admission/components/communication', {
    templateUrl: '/views/forms/components/communication.html'
  })
  .when('/admission/components/socialDevelopment', {
    templateUrl: '/views/forms/components/socialDevelopment.html'
  })
  .when('/admission/components/mobility', {
    templateUrl: '/views/forms/components/mobility.html'
  })


  // Observations
  // ------------
  // Form components for obs
  .when('/admission/components/obs1', {
    templateUrl: '/views/forms/components/obs1.html'
  })
  .when('/admission/components/obs2', {
    templateUrl: '/views/forms/components/obs2.html'
  })
  .when('/admission/components/obs3', {
    templateUrl: '/views/forms/components/obs3.html'
  })


  // Urine/Pain/Skin
  // ---------------
  // Form components for UPS
  .when('/admission/components/urinalysis', {
    templateUrl: '/views/forms/components/urinalysis.html'
  })
  .when('/admission/components/painAssessment', {
    templateUrl: '/views/forms/components/painAssessment.html'
  })
  .when('/admission/components/skinIntegrity', {
    templateUrl: '/views/forms/components/skinIntegrity.html'
  })
  .when('/admission/components/skinIntegrity2', {
    templateUrl: '/views/forms/components/skinIntegrity2.html'
  })


  // Medical History
  // ---------------
  // Form components for Medical History
  .when('/admission/components/medicalHistory', {
    templateUrl: '/views/forms/components/pastMedicalHistory.html'
  })
  .when('/admission/components/allergies', {
    templateUrl: '/views/forms/components/allergies.html'
  })
  .when('/admission/components/medication', {
    templateUrl: '/views/forms/components/medication.html'
  })
  .when('/admission/components/listOfMeds', {
    templateUrl: '/views/forms/components/listOfMeds.html'
  })


  // Living
  // ------
  // Form components for Living Forms
  .when('/admission/components/nutrition', {
    templateUrl: '/views/forms/components/nutrition.html'
  })
  .when('/admission/components/hygiene', {
    templateUrl: '/views/forms/components/hygiene.html'
  })
  .when('/admission/components/sleeping', {
    templateUrl: '/views/forms/components/sleeping.html'
  })

  // Safety
  // ------
  // Form components for Living Forms
  .when('/admission/components/communityInvolvement', {
    templateUrl: '/views/forms/components/communityInvolvement.html'
  })
  .when('/admission/components/safeguardingChildren', {
    templateUrl: '/views/forms/components/safeguardingChildren.html'
  })
  .when('/admission/components/manualHandling', {
    templateUrl: '/views/forms/components/manualHandling.html'
  })

  // Admission
  // ---------
  .when('/admission/components/info', {
    templateUrl: '/views/forms/components/infoChecklist.html'
  })
  .when('/admission/components/decision', {
    templateUrl: '/views/forms/components/decision.html'
  })

  .otherwise({
    redirectTo: '/'
  });
})


},{"./controllers/AdmissionController":2,"./controllers/AuthController":3,"./controllers/DashController":4,"./directives/currentTime":5,"./directives/iconEditor":6,"./directives/ngPredict":7,"./directives/notificationsBar":8,"./directives/progressNode":9,"./directives/radialProgress":10,"./directives/systemBar":11,"./directives/taskEditor":12,"./directives/timeInput":13,"./filters/date":14,"./filters/timeUntil":15,"./services/Authentication":18,"./services/Model":19,"./services/Node":20,"./services/NotificationCenter":21,"./services/Patient":22,"./services/PatientIncubator":23,"./services/PatientTemplate":24,"./services/ProgressTree":25,"./services/Staff":26,"./services/db":27,"./services/resources":28}],2:[function(require,module,exports){
module.exports = function($scope, PatientIncubator) {
  $scope.patient = PatientIncubator.retrieve();

  $scope.community = {
    member: ''
  };
  $scope.siblings = [];
  $scope.allergies = [];
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
      console.log('aggregate check', name, scope.node.aggregate());
    }
  }
};

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/systemBar.html'
  }
};

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/timeInput.html',
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
module.exports = function() {
  return function(due) {
    return due - Date.now();
  }
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('patients');
}

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
module.exports = function() {
  return function() {
    return {
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('staff');
};

},{}],27:[function(require,module,exports){
module.exports = function() {
  return new Firebase('https://astralchai.firebaseio.com');
};

},{}],28:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":16,"../resources/icons.json":17}]},{},[1])