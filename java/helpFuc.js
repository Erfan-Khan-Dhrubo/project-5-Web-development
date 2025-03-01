// Converting text value to string

function textToStr(id) {
  const x = document.getElementById(id).innerText;
  const requiredValue = parseInt(x);
  return requiredValue;
}

// setting the innerText value

function settingInnerText(id, setValue) {
  document.getElementById(id).innerText = setValue;
}

// date and time function

function showTime() {
  // importing Date
  const info = new Date();

  // variable for each part of the date and time
  const optionsWeekday = { weekday: "short" };
  const options = { month: "short", day: "numeric", year: "numeric" };
  const time = info.toLocaleTimeString();

  const weekday = info.toLocaleDateString("en-US", optionsWeekday);
  const monthDayYear = info.toLocaleDateString("en-US", options);

  return [weekday, monthDayYear, time];
}
