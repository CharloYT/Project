var TimerDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;

var TimerFunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = TimerDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  if (distance < 0) {
    clearInterval(TimerFunction);
    document.getElementById("Timer").innerHTML = "Expired";
  }
}, 1000);
