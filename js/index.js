function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

document.querySelector("btn"), addEventListener("click", handleClick);

function handleClick() {
  var twentyFiveMinutes = 60 * 25,
    display = document.querySelector("#time");
  startTimer(twentyFiveMinutes, display);
}

// window.onload = function () {
//   var twentyFiveMinutes = 60 * 25,
//     display = document.querySelector("#time");
//   startTimer(twentyFiveMinutes, display);
// };
