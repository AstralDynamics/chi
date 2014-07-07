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
