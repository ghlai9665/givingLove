// proceed to fuck payment

const moreFucks = document.querySelector("#moreFucks");
moreFucks.addEventListener("click", e => {
  e.preventDefault();
  const modal = document.querySelector("#modal-asklogin");
  M.Modal.getInstance(modal).close();
  $("#modal-fuckPayment").modal("open");
  fuckPayment();
});

function fuckPayment() {
  console.log("The text varialbe is:" + text);

  var newh = document.createElement("h5");

  var newhContent = document.createTextNode(
    "Wow chill man, I never said that " + text + "s were free."
  );
  newh.appendChild(newhContent);
  document.getElementById("header-fuckPayment").appendChild(newh);
  var newh2 = document.createElement("h5");

  var newh2Content = document.createTextNode(
    "Each " +
      text +
      " is $1. Let's see if you really got that " +
      text +
      " you money."
  );
  newh2.appendChild(newh2Content);
  document.getElementById("header-fuckPayment").appendChild(newh2);
  var newh3 = document.createElement("h5");
  var newh3Content = document.createTextNode(
    "Click on paypal button below to give 20 more " + text + "s for $20."
  );
  newh3.appendChild(newh3Content);
  document.getElementById("header-fuckPayment").appendChild(newh3);
}
