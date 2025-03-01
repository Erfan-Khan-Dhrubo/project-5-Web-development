// Actions when completed button is clicked
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByClassName("main_btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      alert("Board Updated Successfully!");
      this.disabled = true; // disabling

      // updating Assign task
      let taskRemain = textToStr("task_left");
      taskRemain -= 1;
      if (taskRemain === 0) {
        alert("Congrats!!!!!! You have completed all the task");
      }
      settingInnerText("task_left", taskRemain);

      // updating score
      let score = textToStr("score");
      score += 1;
      settingInnerText("score", score);
    });
  }
});
