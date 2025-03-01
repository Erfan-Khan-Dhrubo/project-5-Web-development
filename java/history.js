// clearing history

document
  .getElementById("history_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerHTML = "";
  });
