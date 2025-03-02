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

      // Adding History
      const requiredDiv = this.closest(".hl");
      const requiredPValue = requiredDiv.querySelector("h3").innerText;

      const i = document.getElementById("history");
      const divTag = document.createElement("div");
      const timeDate = showTime();
      divTag.innerHTML = `<p class="w-8/10 mx-auto bg-bg_cl p-2 text-text3 rounded-lg my-4">
                You have completed <span class="font-medium text-slate-900"> ${requiredPValue} </span> at ${timeDate[2]}
              </p>`;
      i.appendChild(divTag);
    });
  }
});
