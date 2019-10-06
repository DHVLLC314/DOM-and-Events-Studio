// Write your JavaScript code here.
function init() {
  let takeoffBtn = document.getElementById("takeoff");
  let landingBtn = document.getElementById("landing");
  let missionAbortBtn = document.getElementById("missionAbort");
  let rocket = document.getElementById("rocket");

  let flightStatus = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");


  let buttonUp = document.getElementById("bottonUP");
  let buttonDown =  document.getElementById("bottonDown");
  let buttonLeft =  document.getElementById("bottonLeft");
  let buttonRight =  document.getElementById("bottonRight");
  let yPos = 125;
  let xPos = 0;
  rocket.style.setProperty("position","relative");

  rocket.style.setProperty("top", yPos + "px");
  rocket.style.setProperty("Left", xPos + "px");
  // Put your code for the functions here
  takeoffBtn.addEventListener("click", function(event) {
    window.confirm("Confirm that the shuttle is ready for takeoff"),
    flightStatus.innerHTML = "Shuttle in flight.",
    shuttleBackground.style.background = "blue",
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
  }),

  landingBtn.addEventListener("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged"),
    flightStatus.innerHTML = "The shuttle has landed",
    shuttleBackground.style.background = "green",
    spaceShuttleHeight.innerHTML = 0;
  });

  missionAbortBtn.addEventListener("click", function(event) {
    let result = window.confirm("Confirm that you wamt to abort the mission")
    if (result === true) {
      flightStatus.innerHTML = "Mission Aborted",
      shuttleBackground.style.background = "green",
      spaceShuttleHeight.innerHTML = 0;
    }
  });

  buttonUp.addEventListener("click", function(event) {
    yPos -= 10,
    rocket.style.setProperty("top", yPos + "px"),
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML)+10000;
  });
  buttonDown.addEventListener("click", function(event) {
    yPos += 10,
    rocket.style.setProperty("top", yPos + "px"),
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML)-10000;
  });
  buttonLeft.addEventListener("click", function(event) {
    xPos -= 10,
    rocket.style.setProperty("left", xPos + "px");
  });
  buttonRight.addEventListener("click", function(event) {
    xPos += 10,
    rocket.style.setProperty("left", xPos + "px");
  });

}
// Remember to pay attention to page loading!
window.onload = init;
