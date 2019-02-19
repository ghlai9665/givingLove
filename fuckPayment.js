// proceed to fuck payment

const moreFucks = document.querySelector("#moreFucks");
moreFucks.addEventListener("click", e => {
  e.preventDefault();
  const modal = document.querySelector("#modal-asklogin");
  M.Modal.getInstance(modal).close();
  $("#modal-fuckPayment").modal("open");
  fuckPayment();
});

function getFuckStatus() {
  var fuckStatus;
  //console.log("The text varialbe is:" + text);
  if (total == 20) {
    fuckStatus = "little " + text + "er";
  }
  if (total == 40) {
    fuckStatus = "ok " + text + "er";
  }
  if (total == 60) {
    fuckStatus = "pretty good " + text + "er";
  }
  if (total == 80) {
    fuckStatus = "damn good " + text + "er";
  }
  if (total == 100) {
    fuckStatus = "stupendulous " + text + "er";
  }
  if (total == 120) {
    fuckStatus = "idiot";
  }
  return fuckStatus;
}

function fuckPayment() {
  var fuckStatus = getFuckStatus();
  document.getElementById(
    "header-fuckPayment"
  ).innerHTML = `<h5>Wow chill man, I never said that my ${text}s were free.</h5>
  <h5>Each ${text} is $1. Let's see if you really got that ${text} you money.</h5>
  <h5>Click on the <strong>Paypal</strong> button below to give 20 more  ${text}s for $20.</h5>
  <h5>Based on the current number of ${text}s you've given, you are a <strong><u> ${fuckStatus} </u></strong></h5>
  `;
  /*
  document.getElementById("asklogin-fuckStatus").innerHTML = `
  <h5>Based on the current number of ${text}s you've given, you are a <strong><u>${fuckStatus}</u></strong></h5>
  `;*/
}

document.getElementById(
  "whatU"
).innerHTML = `<h5>What you gonna do about it???</h5>`;
