module.exports = function() {
  return {
    restrict: 'AE',
    scope: {
      details: '=',
      gender: '=',
      age: '=',
      staff: '='
    },
    template:
    "<div class='glyph palette-{{details.primary}}'>" +
      "<i class='icon gender palette-{{details.gender}}' ng-class='{" +
          '"icon-gender-f": gender == "f",' +
          '"icon-gender-m": gender == "m"' +
        "}'> " +
        "<div ng-if='!staff'>" +
          "<i class='icon icon-child subject palette-{{details.tertiary}}'></i>" +
        "</div>" +
        "<div ng-if='staff'>" +
          "<i class='icon fa fa-user-md subject palette-{{details.tertiary}}'></i>" +
        "</div>" +
      "</i>" +
      "<i class='icon fa fa-circle palette-{{details.secondary}}'></i>" +
    "</div>"
  };
};
