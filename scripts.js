let menuIcon = document.querySelector("#menu-icon");
let videoBtn = document.querySelectorAll(".vid-btn");
const form = document.getElementById("form");
const username = document.getElementById("fname");
const email = document.getElementById("email");
const msg = document.getElementById("message");
var isValid1 = false;
var isValid2 = false;
var isValid3 = false;

menuIcon.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  if ((isValid1 && isValid2 && isValid3) == true) {
    form.reset();
    window.open("thanks.html");
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = msg.value.trim();

  if (nameValue === "") {
    isValid1 = false;
    setError(username, "Name is required");
  } else {
    isValid1 = true;
    setSuccess(username);
  }

  if (emailValue === "") {
    isValid2 = false;
    setError(email, "Email is required");
  } else if (!validEmail(emailValue)) {
    isValid2 = false;
    setError(email, "Provide a valid email address");
  } else {
    isValid2 = true;
    setSuccess(email);
  }

  if (messageValue === "") {
    isValid3 = false;
    setError(msg, "Message is required");
  } else {
    isValid3 = true;
    setSuccess(message);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("read-more");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      gtag("event", "recipes_click", {
        event_category: "interaction",
        event_label: "Recipes Button",
        value: 1,
      });
    });
  }
});
