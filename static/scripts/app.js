(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('chai', ['ui.router', 'firebase', 'n3-line-chart'])


.factory({
  db: require('./services/db'),
  Model: require('./services/Model'),
  Patient: require('./services/Patient'),
  PatientTemplate: require('./services/PatientTemplate'),
  PatientIncubator: require('./services/PatientIncubator')
})

.controller({
  AdmissionController: require('./controllers/AdmissionController'),
  GraphController: require('./controllers/GraphController'),
  PatientListController: require('./controllers/PatientListController'),
  PatientController: require('./controllers/PatientController')
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


},{"./controllers/AdmissionController":2,"./controllers/GraphController":3,"./controllers/PatientController":4,"./controllers/PatientListController":5,"./directives/clickToggleClass":6,"./directives/glyph":7,"./directives/patientProfileBar":8,"./directives/pew":9,"./directives/radialProgress":10,"./services/Model":11,"./services/Patient":12,"./services/PatientIncubator":13,"./services/PatientTemplate":14,"./services/db":15}],2:[function(require,module,exports){
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
  patient.$child('messages').on('change', function(message) {
    var notification = {
      icon: 'fa fa-envelope',
      from: message.from,
      to: patient.name,
      time: message.time
    };

    $scope.notifications.$add(notification);
  });



};


},{}],5:[function(require,module,exports){
module.exports = function($scope, $firebase, Patient) {
  $scope.patients = $firebase(Patient.getAll());
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
module.exports = function() {
  return {
    restrict: 'AE',
    scope: {
      patient: '='
    },
    templateUrl: 'partials/patient-profile-bar.html'
  };
};

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
module.exports = function(Model) {
  return new Model('patients');
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
module.exports = function() {
  return new Firebase('https://astralchai.firebaseio.com');
};

},{}]},{},[1])