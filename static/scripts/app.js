(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./modules/time.js');

angular.module('chai', ['ui.router', 'firebase', 'time'])

.factory({
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientTemplate: require('./services/PatientTemplate'),
  PatientIncubator: require('./services/PatientIncubator'),
  WardMessage: require('./services/WardMessage'),
  Staff: require('./services/Staff')
})

.controller({
  AdmissionController: require('./controllers/AdmissionController'),
  GraphController: require('./controllers/GraphController'),
  PatientListController: require('./controllers/PatientListController'),
  PatientController: require('./controllers/PatientController'),
  StaffController: require('./controllers/StaffController'),
  StaffListController: require('./controllers/StaffListController'),
  NotificationController: require('./controllers/NotificationController'),
  WardMessageController: require('./controllers/WardMessageController')
})

.directive({
  radialProgress: require('./directives/radialProgress'),
  clickToggleClass: require('./directives/clickToggleClass'),
  pew: require('./directives/pew'),
  glyph: require('./directives/glyph'),
  patientProfileBar: require('./directives/patientProfileBar')
})

.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/app/dash');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
  })

  // consider writing a parser for a routes file
  //app.dash -> /dash : views/nurse-dash.html
  .state('app', { url: '/app', templateUrl: 'views/app.html' })
    .state('app.dash',           { url: '/dash',          templateUrl: 'views/nurse-dash.html' })
    .state('app.patients',       { url: '/patients',      templateUrl: 'views/patients.html' })
    .state('app.other',          { url: '/otherdata',     templateUrl: 'views/other-data.html' })
    .state('app.notifications',  { url: '/notifications', templateUrl: 'views/notifications.html' })
    .state('app.messages',       { url: '/messages',      templateUrl: 'views/messages.html' })
    .state('app.tasks',          { url: '/tasks',         templateUrl: 'views/tasks.html' })
    .state('app.patient',        { url: '/patient/:id',         templateUrl: 'views/patient.html' })
    .state('app.board',          { url: '/patient/:id/board',   templateUrl: 'views/message-board.html' })
    .state('app.blood',          { url: '/patient/:id/blood',   templateUrl: 'views/blood.html' })
    .state('app.notes',          { url: '/patient/:id/notes',   templateUrl: 'views/notes.html' })

    // medications
    .state('app.medications',    { url: '/patient/:id/medications',       templateUrl: 'views/medications.html' })
    .state('app.medicationList', { url: '/patient/:id/medications/list',  templateUrl: 'views/medications-list.html' })
    .state('app.medication',     { url: '/patient/:id/medication/:medId', templateUrl: 'views/medication.html' })
    .state('app.administer',     { url: '/patient/:id/administer/:medId', templateUrl: 'views/medication-administer.html' })

    // admissions forms
    .state('app.admit', { url: '/admit', templateUrl: 'views/admit.html' })
      .state('app.admit.dash', { url: '/dash', templateUrl: 'views/forms/admission.html' })
      // data
      .state('app.admit.data', { url: '/data', templateUrl: 'views/forms/sections/data.html' })
        .state('app.admit.nameAddress',        { url: '/name',      templateUrl: 'views/forms/components/nameAddress.html', controller: 'AdmissionController'})
        .state('app.admit.patientInformation', { url: '/patient',   templateUrl: 'views/forms/components/patientInformation.html', controller: 'AdmissionController' })
        .state('app.admit.nextOfKin',          { url: '/nextOfKin', templateUrl: 'views/forms/components/nextOfKin.html', controller: 'AdmissionController' })
        .state('app.admit.siblings',           { url: '/siblings',  templateUrl: 'views/forms/components/siblings.html', controller: 'AdmissionController' })
      // observations
      .state('app.admit.observations', { url: '/obs', templateUrl: 'views/forms/sections/observations.html' })
        .state('app.admit.obs1',   { url: '/obs1', templateUrl: 'views/forms/components/obs1.html' })
        .state('app.admit.obs2',   { url: '/obs2', templateUrl: 'views/forms/components/obs2.html' })
        .state('app.admit.obs3',   { url: '/obs3', templateUrl: 'views/forms/components/obs3.html' })
      // urine pain skin
      .state('app.admit.urinePainSkin', { url: '/ups', templateUrl: 'views/forms/sections/urinePainSkin.html' })
        .state('app.admit.urine', { url: '/urine', templateUrl: 'views/forms/components/urinalysis.html' })
        .state('app.admit.pain',  { url: '/pain',  templateUrl: 'views/forms/components/painAssessment.html' })
        .state('app.admit.skin',  { url: '/skin',  templateUrl: 'views/forms/components/skinIntegrity.html' })
      // medical history
      .state('app.admit.medicalHistory', { url: '/medical', templateUrl: 'views/forms/sections/medicalHistory.html' })
        .state('app.admit.history',     { url: '/history',     templateUrl: 'views/forms/components/pastMedicalHistory.html' })
        .state('app.admit.allergies',   { url: '/allergies',   templateUrl: 'views/forms/components/allergies.html' })
        .state('app.admit.medications', { url: '/medications', templateUrl: 'views/forms/components/medications.html' })
      // living
      .state('app.admit.living', { url: '/living', templateUrl: 'views/forms/sections/living.html' })
        .state('app.admit.nutrition', { url: '/nutrition', templateUrl: 'views/forms/components/nutrition.html' })
        .state('app.admit.hygiene',   { url: '/hygiene',   templateUrl: 'views/forms/components/hygiene.html' })
        .state('app.admit.sleeping',  { url: '/sleeping',  templateUrl: 'views/forms/components/sleeping.html' })
      // development
      .state('app.admit.development', { url: '/development', templateUrl: 'views/forms/sections/development.html' })
        .state('app.admit.communication', { url: '/communication', templateUrl: 'views/forms/components/communication.html' })
        .state('app.admit.social',        { url: '/social',        templateUrl: 'views/forms/components/socialDevelopment.html' })
        .state('app.admit.mobility',      { url: '/mobility',      templateUrl: 'views/forms/components/mobility.html' })
      // safety
      .state('app.admit.safety', { url: '/safety', templateUrl: 'views/forms/sections/safety.html' })
        .state('app.admit.community',    { url: '/community',     templateUrl: 'views/forms/components/communityInvolvement.html' })
        .state('app.admit.safeguarding', { url: '/safeguarding',  templateUrl: 'views/forms/components/safeguardingChildren.html' })
        .state('app.admit.manual',       { url: '/manual',        templateUrl: 'views/forms/components/manualHandling.html' })
      // information
      .state('app.admit.information',    { url: '/information', templateUrl: 'views/forms/sections/information.html' })
      // decision
      .state('app.admit.decision',       { url: '/decision', templateUrl: 'views/forms/sections/decision.html' });
});


},{"./controllers/AdmissionController":2,"./controllers/GraphController":3,"./controllers/NotificationController":4,"./controllers/PatientController":5,"./controllers/PatientListController":6,"./controllers/StaffController":7,"./controllers/StaffListController":8,"./controllers/WardMessageController":9,"./directives/clickToggleClass":10,"./directives/glyph":11,"./directives/patientProfileBar":12,"./directives/pew":13,"./directives/radialProgress":14,"./modules/time.js":15,"./services/Model":16,"./services/Patient":17,"./services/PatientIncubator":18,"./services/PatientTemplate":19,"./services/Staff":20,"./services/WardMessage":21,"./services/db":22}],2:[function(require,module,exports){
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
module.exports = function($scope) {
  $scope.data = [
    {
      x: 0,
      val_0: 32
    },
    {
      x: 1,
      val_0: 26
    },
    {
      x: 2,
      val_0: 29
    },
    {
      x: 3,
      val_0: 30
    },
    {
      x: 4,
      val_0: 35
    },
    {
      x: 5,
      val_0: 31
    },
    {
      x: 6,
      val_0: 27
    }
  ];

  $scope.options = {
    axes: {
      x: {type: "linear"},
      y: {type: "linear", max: 90, min: 0}
    },
    series: [
      {
        y: "val_0",
        label: "A time series",
        color: "#9467bd",
        axis: "y",
        type: "line",
        thickness: "2px",
        id: "series_0",
        drawDots: true
      }
    ],
    tooltip: {mode: "scrubber"},
    stacks: [],
    lineMode: "linear",
    tension: 0.7,
    drawLegend: false,
    drawDots: true,
    columnsHGap: 20
  };
};

},{}],4:[function(require,module,exports){
module.exports = function($scope, $firebase, $timeout, WardMessage) {

  $scope.messages = 0;
  $scope.messagesActive = false;

  var messages = $firebase(WardMessage.getAll());

  messages.$on('loaded', function() {
    messages.$on('change', function() {
      $scope.messages += 1;
      $scope.messagesActive = true;
      $timeout(function() {
        $scope.messagesActive = false;
      }, 3000);
    });
  });

};

},{}],5:[function(require,module,exports){
module.exports = function($scope, $firebase, $stateParams, Patient) {
  var id = $stateParams.id;

  // redirect invalid users
  if(id.length <= 0) {
    window.location.replace('#/app/patients');
    return;
  }

  var patient = $scope.patient = $firebase(Patient.get(id));
  $scope.id = id;
  $scope.notifications = patient.$child('notifications');

  $scope.checkout = function() {
    // remove from db
  };

  // Listen for new messages
  /*patient.$child('messages').on('change', function(message) {
    var notification = {
      icon: 'fa fa-envelope',
      from: message.from,
      to: patient.name,
      time: message.time
    };

    $scope.notifications.$add(notification);
  });
  */



};


},{}],6:[function(require,module,exports){
module.exports = function($scope, $firebase, Patient) {
  $scope.patients = $firebase(Patient.getAll());
};

},{}],7:[function(require,module,exports){
module.exports = function($scope, $firebase, Staff) {
  // get from auth in future
  var id = '-nbj';

  $scope.staff = $firebase(Staff.get(id));

};

},{}],8:[function(require,module,exports){
module.exports = function($scope, $firebase, Staff) {
  $scope.staff = $firebase(Staff.getAll());
};

},{}],9:[function(require,module,exports){
module.exports = function($scope, $firebase, WardMessage) {
  $scope.messages = $firebase(WardMessage.getAll());

  $scope.message = '';

  $scope.post = function() {
    WardMessage.save({
      from: 'Dr Kurmos',
      glyph: {
        primary: 2,
        secondary: 3,
        tertiary: 5,
        gender: 'm'
      },
      time: Date.now(),
      body: $scope.message
    });
  };
};

},{}],10:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      toggleClass: '@clickToggleClass'
    },
    link: function(scope, element, attrs) {
      element.on('click', function() {
        element.toggleClass(scope.toggleClass);
      });
    }
  };
};

},{}],11:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'AE',
    scope: {
      details: '=',
      gender: '='
    },
    template:
    "<div class='glyph palette-{{details.primary}}'>" +
      "<i class='icon gender palette-{{details.gender}}' ng-class='{" +
          '"icon-gender-f": gender == "f",' +
          '"icon-gender-m": gender == "m"' +
        "}'> " +
        "<i class='icon icon-toddler subject palette-{{details.tertiary}}'></i>" +
      "</i>" +
      "<i class='icon fa fa-circle palette-{{details.secondary}}'></i>" +
    "</div>"
  };
};

},{}],12:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'AE',
    scope: {
      patient: '='
    },
    templateUrl: 'partials/patient-profile-bar.html'
  };
};

},{}],13:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pew: '=',
      up: '=',
      down: '='
    },
    template:
    "<div class='pew pill' ng-class='{ high: pew > 5, low: pew < 3}'>" +
      "<i class='fa fa-arrow-up' ng-show='up'></i>" +
      "<span class='number' ng-bind='pew'></span>" +
      "<i class='fa fa-arrow-down' ng-show='down'></i>" +
    "</div>",
    link: function(scope) {
    }
  };
};

},{}],14:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'A',
    transclude: true,
    template:
    '<div class="radial-progress">' +
      '<div class="wrapper" ng-class="{ halfway:degrees() > 180 }">' +
        '<div class="circle" style="-webkit-transform:rotate({{degrees()}}deg)"></div>' +
        '<div class="circle" style="-webkit-transform:rotate({{degrees(true)}}deg)"></div>' +
      '</div>' +
      '<div class="background wrapper halfway">' +
        '<div class="transclude" ng-transclude></div>' +
        '<div class="circle" style="-webkit-transform:rotate(360deg)"></div>' +
        '<div class="circle" style="-webkit-transform:rotate(180deg)"></div>' +
      '</div>' +
    '</div>',
    scope: {
      radialProgress: '=radialProgress'
    },
    link: function(scope, element, attributes) {
      // Cap so that right will render correctly
      scope.degrees = function(cap) {
        var deg = scope.radialProgress * 360;
        if(deg > 180 && cap) deg = 180;
        return deg;
      };
    }
  };
};

},{}],15:[function(require,module,exports){
// useful time constants
var SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    WEEK = DAY * 7;

module.exports = angular.module('time', [])

.directive('timeSince', function() {
  return {
    restrict: 'A',
    scope: {
      since: '=timeSince'
    },
    link: function(scope, element) {
      var since = scope.since;
      render();

      function render() {
        var now, delta, quantity, interval, text;

        now = Date.now();
        delta = now - since;

        if(delta > WEEK) {
          text = Math.floor(delta / WEEK) + 'w';
          interval = WEEK;
        } else if(delta > DAY) {
          text = Math.floor(delta / DAY) + 'd';
          interval = DAY;
        } else if(delta > HOUR) {
          text = Math.floor(delta / HOUR) + 'h';
          interval = HOUR;
        } else if(delta > MINUTE) {
          text = Math.floor(delta / MINUTE) + 'm';
          interval = MINUTE;
        } else {
          text = Math.floor(delta / SECOND) + 's';
          interval = SECOND;
        }

        element.html(text);
        setTimeout(render, interval);
      }
    }
  };
})

.directive('date', function() {
  return {
    restrict: 'A',
    scope: {
      date: '=',
      format: '@'
    },
    link: function(scope, element) {
      var format, date, text;

      format = scope.format || 'd/m/y';
      date = new Date(scope.date);
      console.log(date);

      text = format
        .replace('d', date.getDate())
        .replace('m', date.getMonth() + 1)
        .replace('y', date.getYear() + 1900);

      element.html(text);

    }
  };
});

},{}],16:[function(require,module,exports){
module.exports = function(db) {

  return function(name) {
    var root = db.child(name),
        cache = {};

    function get(id) {
      if(!cache[id]) {
        cache[id] = root.child(id);
      }
      return cache[id];
    }

    function save(model) {
      root.push(model);
    }

    function getAll() {
      return root;
    }

    return {
      save: save,
      get: get,
      getAll: getAll
    };
  };
};

},{}],17:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('patients');
};

},{}],18:[function(require,module,exports){
module.exports = function(PatientTemplate, Patient, $firebase) {
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

  function loadFromDb(id) {
    patient = $firebase(Patient.fromDb(id));
  }

  function done() {
    patient = null;
  }

  return {
    loadFromDb: loadFromDb,
    retrieve: retrieve,
    create: create,
    done: done
  }
};

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('staff');
};

},{}],21:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('messages');
};

},{}],22:[function(require,module,exports){
module.exports = function() {
  return new Firebase('https://astralchai.firebaseio.com');
};

},{}]},{},[1])