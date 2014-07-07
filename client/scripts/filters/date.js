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
