// Setting dynamic date
document.addEventListener("DOMContentLoaded", function () {
  const timeDate = showTime();
  settingInnerText("week", timeDate[0]);
  settingInnerText("date", timeDate[1]);
});
