//continue as a guest
document.getElementById("guest").addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth"
  });
});

// sign up
document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      //store extra info about user
      return db
        .collection("users")
        .doc(cred.user.uid)
        .set({
          bio: signupForm["signup-bio"].value
        });
    })
    .then(() => {
      //close signup modal
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
      signupForm.querySelector(".error").innerHTML = "";
    })
    .catch(err => {
      signupForm.querySelector(".error").innerHTML = err.message;
    });
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log("user logged in");
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      loginForm.querySelector(".error").innerHTML = "";
      window.scroll({
        top: 1 * window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    })
    .catch(err => {
      loginForm.querySelector(".error").innerHTML = err.message;
    });
});

//ask log in
const nah = document.querySelector("#nah");

nah.addEventListener("click", e => {
  console.log("they tried to run this...");
  e.preventDefault();
  return restart();
});

function modalX() {
  const modal = document.querySelector("#modal-asklogin");
  M.Modal.getInstance(modal).close();
  $("#modal-login").modal("open");
}

const yeah = document.querySelector("#yeah");
yeah.addEventListener("click", e => {
  e.preventDefault();
  console.log("they tried to run this...");
  return modalX();
});

// log out
const logout = document.querySelector("#logout");
logout.addEventListener("click", e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("User logged out...");
  });
});

// handle login/logout

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in: ", user);
    setupUI(user);
  } else {
    setupUI();
  }
});

const setupUI = user => {
  if (user) {
    total = 15;
    document.querySelector("#logout").style.display = "inline";
    document.querySelector("#login").style.display = "none";
    document.querySelector("#guest").style.display = "none";
    document.querySelector("#signup").style.display = "none";
    document.querySelector("#loveButton").style.display = "none";
    document.querySelector("#fuckButton").style.display = "none";
    document.querySelector("#fieldInput-premium").style.display = "block";
  } else {
    total = 11;
    document.querySelector("#login").style.display = "inline";
    document.querySelector("#logout").style.display = "none";
    document.querySelector("#guest").style.display = "inline";
    document.querySelector("#signup").style.display = "inline";
    document.querySelector("#fieldInput-premium").style.display = "none";
    document.querySelector("#loveButton").style.display = "inline";
    document.querySelector("#fuckButton").style.display = "inline";
  }
};
