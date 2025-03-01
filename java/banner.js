// Setting dynamic date
document.addEventListener("DOMContentLoaded", function () {
  const timeDate = showTime();
  settingInnerText("week", timeDate[0]);
  settingInnerText("date", timeDate[1]);
});

// background color changer

function getRandomColor() {
  const colors = [
    "rgba(255, 0, 0, 0.3)",
    "rgba(255, 165, 0, 0.3)",
    "rgba(255, 255, 0, 0.3)",
    "rgba(0, 128, 0, 0.3)",
    "rgba(0, 0, 255, 0.3)",
    "rgba(75, 0, 130, 0.3)",
    "rgba(238, 130, 238, 0.3)",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

document
  .getElementById("color_change_btn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });
