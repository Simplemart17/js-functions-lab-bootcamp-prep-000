// write your code below!
var name = "Matthew";
var holiday = "Christmas";
var days = 25;

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function happyCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
