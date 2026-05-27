function _padTime(n) {
  return n < 10 ? '0' + n : n;
}

function displayWord(timeHolder) {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) $(`${timeHolder} h1`).html('Good Morning!');
  else if (hour >= 12 && hour < 17) $(`${timeHolder} h1`).html('Good Afternoon!');
  else if (hour >= 17 && hour < 24) $(`${timeHolder} h1`).html('Good Evening!');
  else $(`${timeHolder} h1`).html("Good...? Wait shouldn't you be asleep?");
}

function displayTime() {
  const dateTime = new Date();
  const hours = _padTime(dateTime.getHours());
  const minutes = _padTime(dateTime.getMinutes());
  const seconds = _padTime(dateTime.getSeconds());
  $('time').html(`${hours}:${minutes}:${seconds}`);
}

window.displayTime = displayTime;
window.displayWord = displayWord;
