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
