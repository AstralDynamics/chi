module.exports = function($http) {
  var STATE_SYMBOL = ':',
      TEMPLATE_SYMBOL = '->';

  // Build a route object for a raw route
  function createRoute(raw) {
    var parts, template, ids, state, url;

    parts = raw.split(TEMPLATE_SYMBOL);
    template = parts[1];
    ids = parts[0].split(STATE_SYMBOL);
    state = ids[0];
    url = ids[1];

    return {
      state: state,
      url: url,
      templateUrl: template
    };
  }

  // Convert a routes file into
  // an array of valid routes
  this.parse = function(routes) {
    return routes.split('\n')
      .map(this.createRoute);
  };

  // Fetch the routes file
  this.fetch = function() {
    var self = this;
    $http.get('scripts/app.routes')
    .success(function(routes) {
      self.parse(routes);
    })
    .error(function() {
      // could not load routes
    });
  };

};
